import { ROLE } from "@/models/enums";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

// Prefix tables with "T"
export const usersT = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
  role: text("role", { enum: [ROLE.ADMIN, ROLE.USER] })
    .notNull()
    .default(ROLE.USER),
  lastLogInAt: integer("last_log_in_at", { mode: "timestamp_ms" }),
  lastLogInTries: integer("last_log_in_tries").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`)
    .$onUpdateFn(() => new Date()),
});
