"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { z } from "zod";

const LogInDto = z.object({
  email: z.string().email({ message: "Email is not a valid email address" }),
  password: z.string().min(1),
});
type LogInDto = z.infer<typeof LogInDto>;

export const LogInForm = () => {
  const [values, setValues] = useState<Partial<LogInDto>>();

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={LogInDto}
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
      }}
    >
      <AutoFormSubmit className="w-full">Log In</AutoFormSubmit>
      {/* {actionData?.error && (
            <p className="text-red-500">{actionData?.error}</p>
          )} */}
    </AutoForm>
  );
};
