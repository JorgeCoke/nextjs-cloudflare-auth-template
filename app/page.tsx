export const runtime = "edge";

import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="container">
      <h1 className="font-bold text-4xl text-center">Next-Cloudflare</h1>
      <div className="flex gap-4">
        <Button asChild>
          <Link href={ROUTES.AUTH.LOG_IN}>Login</Link>
        </Button>
        <Button asChild>
          <Link href={ROUTES.AUTH.SIGN_UP}>Signup</Link>
        </Button>
        {session && (
          <Button asChild>
            <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
          </Button>
        )}
      </div>
    </main>
  );
}
