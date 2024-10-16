import { google } from "@/lib/lucia";
import { generateState } from "arctic";
import { cookies } from "next/headers";




export async function GET() {
  const state = generateState();
  const url = await google.createAuthorizationURL(state);

  cookies().set("google_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
}


