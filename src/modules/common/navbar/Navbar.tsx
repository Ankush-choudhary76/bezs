"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

type KeycloakPermission = {
  rsname: string;
};

type KeycloakToken = {
  authorization?: {
    permissions?: KeycloakPermission[];
  };
};

const Navbar = () => {
  const { data: betterAuthSession } = authClient.useSession();

  async function handleLogout() {
    await authClient.signOut();
  }

  async function test() {
    const { data } = await authClient.listAccounts();
    console.log(data);
  }

  function getPermission(token: string): string[] {
    if (!token) return [];
    const decoded = jwtDecode<KeycloakToken>(token);

    return decoded?.authorization?.permissions?.map((p) => p.rsname) || [];
  }

  // async function registerNewClient() {
  //   const application = await authClient.oauth2.register({
  //     client_name: "keycloak",
  //   });
  // }

  // test();

  console.log(betterAuthSession?.user);
  // console.log(getPermission(betterAuthSession?.session.token || ""));

  return (
    <div className="bg-zinc-200 shadow flex justify-between gap-2 py-2 px-4">
      <h1>Bezs</h1>
      <div>
        {betterAuthSession ? (
          <Button size="sm" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Link
            href="/auth-provider"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Sign In
          </Link>
        )}
        {/* <Button size="sm">Register new client</Button> */}
      </div>
    </div>
  );
};

export default Navbar;
