"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { usersT } from "@/lib/db/schemas/users";
import {
  comparePasswords,
  hashPassword,
  removeSession,
  setSession,
} from "@/lib/auth.server";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { LogInDto, SignUpDto } from "./dtos";
import { actionClient } from "@/lib/safe-action";

export const doSignUp = actionClient
  .schema(SignUpDto)
  .action(async ({ parsedInput: input }) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    if (input.password !== input.repeatPassword) {
      return { error: "Passwords does not match" };
    }
    const [user] = await db
      .select()
      .from(usersT)
      .limit(1)
      .where(eq(usersT.email, input.email));
    if (user) {
      return {
        error: "Unable to create to create user. Please try again later",
      };
    }
    await db.insert(usersT).values({
      email: input.email,
      password: await hashPassword(input.password),
    });
    return redirect(ROUTES.AUTH.LOG_IN);
  });

export const doLogIn = actionClient
  .schema(LogInDto)
  .action(async ({ parsedInput: input }) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const [user] = await db
      .select()
      .from(usersT)
      .limit(1)
      .where(eq(usersT.email, input.email));
    if (!user || !user.enabled) {
      return { error: "Invalid username or password" };
    }
    const success = await comparePasswords(input.password, user.password);
    if (!success) {
      // Increment lastLogInTries and disable user in case anomalous login tries
      await db
        .update(usersT)
        .set({
          lastLogInTries: user.lastLogInTries + 1,
          enabled: user.lastLogInTries < 99,
        })
        .where(eq(usersT.id, user.id));
      return { error: "Invalid username or password" };
    }
    await setSession(user.id, user.role);
    // Update lastLogInAt and reset lastLogInTries
    await db
      .update(usersT)
      .set({ lastLogInAt: new Date(), lastLogInTries: 0 })
      .where(eq(usersT.id, user.id));

    return redirect(ROUTES.DASHBOARD);
  });

export const doLogOut = async () => {
  await removeSession();
  return redirect(ROUTES.AUTH.LOG_IN);
};
