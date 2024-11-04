"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useActionState, useState } from "react";
import { doSignUp } from "../actions";
import { SignUpDto } from "../dtos";
import { ActionState } from "@/lib/actions";

export const SignUpForm = () => {
  const [values, setValues] = useState<Partial<SignUpDto>>();
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    doSignUp,
    { error: "" }
  );

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={SignUpDto}
      action={formAction}
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
      <AutoFormSubmit disabled={pending} className="w-full">
        Sign Up
      </AutoFormSubmit>
      {state?.error && <p className="text-red-500">{state?.error}</p>}
    </AutoForm>
  );
};
