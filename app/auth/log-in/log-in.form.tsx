"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useActionState, useState } from "react";
import { doLogIn } from "../actions";
import { LogInDto } from "../dtos";
import { ActionState } from "@/lib/actions";

export const LogInForm = () => {
  const [values, setValues] = useState<Partial<LogInDto>>();
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    doLogIn,
    { error: "" }
  );

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={LogInDto}
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
      }}
    >
      <AutoFormSubmit disabled={pending} className="w-full">
        Log In
      </AutoFormSubmit>
      {state?.error && <p className="text-red-500">{state?.error}</p>}
    </AutoForm>
  );
};
