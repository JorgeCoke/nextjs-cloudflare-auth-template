"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { doSignUp } from "../actions";
import { SignUpDto } from "../dtos";

export const SignUpForm = () => {
  const [values, setValues] = useState<Partial<SignUpDto>>();
  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={SignUpDto}
      onSubmit={(data) => doSignUp(data)}
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
