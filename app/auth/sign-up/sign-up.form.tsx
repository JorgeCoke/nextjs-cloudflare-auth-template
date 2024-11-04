"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { useState } from "react";
import { doSignUp } from "../actions";
import { SignUpDto } from "../dtos";
import { useAction } from "next-safe-action/hooks";
import { useToast } from "@/hooks/use-toast";

export const SignUpForm = () => {
  const [values, setValues] = useState<Partial<SignUpDto>>();
  const { toast } = useToast();
  const { executeAsync, result, isPending } = useAction(doSignUp, {
    onSuccess: () => {
      toast({
        title: "Your account is ready!",
        description: "Now you can login with your credentials",
        variant: "success",
      });
    },
  });

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
      <AutoFormSubmit
        disabled={isPending}
        className="w-full bg-gradient-to-r from-[#ff4eaf] to-[#c74eff]"
      >
        Sign Up
      </AutoFormSubmit>
      {result.validationErrors?._errors && (
        <p className="text-red-500">{result.validationErrors?._errors}</p>
      )}
    </AutoForm>
  );
};
