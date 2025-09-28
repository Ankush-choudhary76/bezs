// lib/keycloak.ts
export async function getAccessToken() {
  const res = await fetch(
    "http://localhost:8080/realms/test/protocol/openid-connect/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.KEYCLOAK_CREDENTIAL_FLOW_CLIENT_ID!,
        client_secret: process.env.KEYCLOAK_CREDENTIAL_FLOW_CLIENT_SECRET!,
        grant_type: "client_credentials",
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch access token");
  }

  return res.json();
}
