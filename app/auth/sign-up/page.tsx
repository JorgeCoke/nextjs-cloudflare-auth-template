export const runtime = "edge";

import { ROUTES } from "@/lib/routes";
import { FlameKindling, MoveLeft } from "lucide-react";
import { SignUpForm } from "./sign-up.form";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@/lib/auth.server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getSession();
  if (session) {
    return redirect(ROUTES.DASHBOARD);
  }

  return (
    <main className="w-full h-[100vh] lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-primary lg:flex justify-center">
        <div className="flex flex-col gap-3 items-center justify-center font-medium text-white text-3xl">
          <FlameKindling className="w-24 h-24" />
          Next-Cloudflare
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <Link
          href={ROUTES.INDEX}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          <MoveLeft />
          Homepage
        </Link>
        <div className="mx-auto grid w-[350px] gap-6 p-2">
          <div className="flex flex-col gap-2 text-center">
            <div className="flex lg:hidden justify-center">
              <FlameKindling className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignUpForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href={ROUTES.AUTH.LOG_IN} className="underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
