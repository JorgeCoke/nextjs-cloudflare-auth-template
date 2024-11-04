"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { doSignUp } from "../actions";
import { SignUpDto } from "../dtos";
import { useAction } from "next-safe-action/hooks";

export const SignUpForm = () => {
  const [values, setValues] = useState<Partial<SignUpDto>>();
  const { executeAsync, result, isPending } = useAction(doSignUp);

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={SignUpDto}
      onSubmit={executeAsync}
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
      <AutoFormSubmit disabled={isPending} className="w-full">
        Sign Up
      </AutoFormSubmit>
      {result.data?.error && (
        <p className="text-red-500">{result.data?.error}</p>
      )}
    </AutoForm>
  );
};
