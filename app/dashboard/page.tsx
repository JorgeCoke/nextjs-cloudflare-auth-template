export const runtime = "edge";

import { Button } from "@/components/ui/button";
import { doLogOut } from "../auth/actions";

export default async function DashboardPage() {
  return (
    <div>
      <form action={doLogOut}>
        <Button>Log Out</Button>
      </form>
    </div>
  );
}
