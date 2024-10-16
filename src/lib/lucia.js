import { Lucia } from "lucia";
import { MongoDBAdapter } from "@lucia-auth/adapter-mongodb";
import Session from "./models/Session";
import User from "./models/User";
import dbConnect from "./db";
import { Google } from "arctic"

export const google = new Google(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET
);

await dbConnect();

const adapter = new MongoDBAdapter(
	Session,
	User
); // your adapter

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	}
});






