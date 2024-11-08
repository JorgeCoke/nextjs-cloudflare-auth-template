import { z } from "zod";

export const SignUpDto = z
  .object({
    email: z
      .string()
      .trim()
      .email({ message: "Email is not a valid email address" }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must containt at least 8 characteres" }),
    repeatPassword: z
      .string()
      .trim()
      .min(8, { message: "Password must containt at least 8 characteres" }),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    path: ["repeatPassword"],
    message: "Passwords do not match",
  });
export type SignUpDto = z.infer<typeof SignUpDto>;

export const LogInDto = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Email is not a valid email address" }),
  password: z.string().trim().min(1),
});
export type LogInDto = z.infer<typeof LogInDto>;
