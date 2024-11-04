"use server";

import { ROLE } from "@/models/enums";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { compareSync, hashSync } from "bcryptjs";
import { drizzle } from "drizzle-orm/d1";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { usersT } from "./db/schemas/users";
import { eq } from "drizzle-orm";

const COOKIE_KEY = "session";
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

export type JwtPayload = {
  userId: string;
  role: ROLE;
  expires: string; // The token is checked to ensure it has not expired.
};

export async function hashPassword(password: string) {
  return hashSync(password, 10);
}

export async function comparePasswords(
  plainTextPassword: string,
  hashedPassword: string
) {
  return compareSync(plainTextPassword, hashedPassword);
}

export async function signToken(payload: JwtPayload) {
  const KEY = new TextEncoder().encode(
    getRequestContext().env.AUTH_SESSION_SECRET_KEY
  );
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + ONE_WEEK))
    .sign(KEY);
}

export async function verifyToken(input: string) {
  const KEY = new TextEncoder().encode(
    getRequestContext().env.AUTH_SESSION_SECRET_KEY
  );
  try {
    const { payload } = await jwtVerify(input, KEY, {
      algorithms: ["HS256"],
    });
    return payload as JwtPayload;
  } catch (err) {
    return null;
  }
}

export async function setSession(userId: string, role: ROLE) {
  const expiresInOneWeek = new Date(Date.now() + ONE_WEEK);
  const session: JwtPayload = {
    userId,
    role,
    expires: expiresInOneWeek.toISOString(),
  };
  const encryptedSession = await signToken(session);
  (await cookies()).set(COOKIE_KEY, encryptedSession, {
    expires: expiresInOneWeek,
    maxAge: ONE_WEEK / 1000,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookie = (await cookies()).get(COOKIE_KEY)?.value;
  if (!cookie) {
    return null;
  }
  const session = await verifyToken(cookie);
  if (!session || new Date(session.expires) < new Date()) {
    return null;
  }
  return session;
}

export async function removeSession() {
  (await cookies()).delete(COOKIE_KEY);
}

export async function getUser() {
  const session = await getSession();
  if (!session) {
    return null;
  }
  const db = drizzle(getRequestContext().env.DB);
  const [user] = await db
    .select()
    .from(usersT)
    .where(eq(usersT.id, session.userId))
    .limit(1);
  if (!user) {
    return null;
  }
  return user;
}
