"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const AuthProviderPage = () => {
  async function handleKeycloakLogin() {
    // login();
    await authClient.signIn.oauth2({
      providerId: "keycloak",
      callbackURL: "http://localhost:3002/",
    });

    // for pkce
    // await authClient.signIn.oauth2({
    //   providerId: "keycloak",
    //   callbackURL: "myapp://auth/callback",
    // });
  }

  return (
    <div>
      <h1>Select Auth Provider</h1>
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          size="sm"
          onClick={() => {
            redirect("/sign-in");
          }}
        >
          Better auth
        </Button>
        <Button size="sm" onClick={handleKeycloakLogin}>
          KeyCloak auth
        </Button>
      </div>
    </div>
  );
};

export default AuthProviderPage;
