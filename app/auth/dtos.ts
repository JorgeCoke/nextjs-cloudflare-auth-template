import { z } from "zod";

export const SignUpDto = z.object({
  email: z.string().email({ message: "Email is not a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must containt at least 8 characteres" }),
  repeatPassword: z
    .string()
    .min(8, { message: "Password must containt at least 8 characteres" }),
});
export type SignUpDto = z.infer<typeof SignUpDto>;

export const LogInDto = z.object({
  email: z.string().email({ message: "Email is not a valid email address" }),
  password: z.string().min(1),
});
export type LogInDto = z.infer<typeof LogInDto>;
