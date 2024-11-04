"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { doLogIn } from "../actions";
import { LogInDto } from "../dtos";

export const LogInForm = () => {
  const [values, setValues] = useState<Partial<LogInDto>>();

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={LogInDto}
      onSubmit={(data) => doLogIn(data)}
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
