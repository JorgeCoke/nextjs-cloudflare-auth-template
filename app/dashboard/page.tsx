import { getSession } from "@/lib/auth.server";

export const runtime = "edge";

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <section className="container pt-20">
      <div className="mx-auto space-y-12">
        <div className="max-w-screen-lg mx-auto text-center text-4xl md:text-6xl font-bold">
          <h1>Hello!</h1>
        </div>
        <p className="max-w-screen-sm mx-auto text-xl text-center text-muted-foreground">
          Your userId is: {session?.userId}
        </p>
      </div>
    </section>
  );
}
