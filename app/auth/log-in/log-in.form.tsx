"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { doLogIn } from "../actions";
import { LogInDto } from "../dtos";
import { useAction } from "next-safe-action/hooks";
import { useToast } from "@/hooks/use-toast";

export const LogInForm = () => {
  const [values, setValues] = useState<Partial<LogInDto>>();
  const { toast } = useToast();
  const { executeAsync, result, isPending } = useAction(doLogIn, {
    onSuccess: () => {
      toast({ title: "Welcome back!", variant: "success" });
    },
  });

  return (
    <AutoForm
      values={values}
      onParsedValuesChange={setValues}
      formSchema={LogInDto}
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
      }}
    >
      <AutoFormSubmit disabled={isPending} className="w-full">
        Log In
      </AutoFormSubmit>
      {result.validationErrors?._errors && (
        <p className="text-red-500">{result.validationErrors?._errors}</p>
      )}
    </AutoForm>
  );
};
