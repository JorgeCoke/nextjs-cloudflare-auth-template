"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { z } from "zod";

const SignUpDto = z.object({
  email: z.string().email({ message: "Email is not a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must containt at least 8 characteres" }),
  repeatPassword: z
    .string()
    .min(8, { message: "Password must containt at least 8 characteres" }),
});
type SignUpDto = z.infer<typeof SignUpDto>;

export const SignUpForm = () => {
  const [values, setValues] = useState<Partial<SignUpDto>>();

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={SignUpDto}
      fieldConfig={{
        email: {
          inputProps: {
            type: "email",
            placeholder: "example@mail.com",
          },
        },
        password: {
          inputProps: {
            type: "password",
            placeholder: "********",
          },
        },
        repeatPassword: {
          inputProps: {
            type: "password",
            placeholder: "********",
          },
        },
      }}
    >
      <AutoFormSubmit className="w-full">Sign Up</AutoFormSubmit>
      {/* {actionData?.error && (
              <p className="text-red-500">{actionData?.error}</p>
            )} */}
    </AutoForm>
  );
};
