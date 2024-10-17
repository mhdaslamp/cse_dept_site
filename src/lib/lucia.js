import { Google } from "arctic";
import { base32, encodeHex } from "oslo/encoding";
import Session from "@/lib/models/Session";

import { sha256 } from "oslo/crypto";
import { getSessionToken } from "./session";
import User from "./models/User";
import { dbConnect } from "@/lib/db";

const SESSION_REFRESH_INTERVAL_MS = 1000 * 60 * 60 * 24 * 15;
const SESSION_MAX_DURATION_MS = SESSION_REFRESH_INTERVAL_MS * 2;

export const googleAuth = new Google(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.HOST_NAME}/api/login/google/callback`
);

export function generateSessionToken() {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  const token = base32.encode(bytes);
  return token;
}

export async function createSession(token, userId) {
  await dbConnect();
  const sessionId = base32.encode(sha256(new TextEncoder().encode(token)));
  const session = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + SESSION_MAX_DURATION_MS),
  };
  await Session.create(session);
  return session;
}

export async function validateRequest() {
  await dbConnect();
  const sessionToken = getSessionToken();
  if (!sessionToken) {
    return { session: null, user: null };
  }
  return validateSessionToken(sessionToken);
}

export async function validateSessionToken(token) {
  await dbConnect();
  const sessionId = encodeHex(sha256(new TextEncoder().encode(token)));
  const sessionInDb = await Session.findById(sessionId);
  if (!sessionInDb) {
    return { session: null, user: null };
  }
  if (Date.now() >= sessionInDb.expiresAt.getTime()) {
    await Session.findByIdAndRemove(sessionId);
    return { session: null, user: null };
  }
  const user = await User.findById(sessionInDb.userId);

  if (!user) {
    await Session.findByIdAndRemove(sessionId);
    return { session: null, user: null };
  }

  if (
    Date.now() >=
    sessionInDb.expiresAt.getTime() - SESSION_REFRESH_INTERVAL_MS
  ) {
    sessionInDb.expiresAt = new Date(Date.now() + SESSION_MAX_DURATION_MS);
    await sessionInDb.save();
  }
  return { session: sessionInDb, user };
}

export async function invalidateSession(sessionId) {
  await dbConnect();
  await Session.findByIdAndRemove(sessionId);
}

export async function invalidateUserSessions(userId) {
  await dbConnect();
  await Session.deleteMany({ userId });
}
