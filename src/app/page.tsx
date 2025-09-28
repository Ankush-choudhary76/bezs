/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { getAccessToken } from "@/lib/keycloak";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  async function testSecureAPI() {
    try {
      const res = await fetch("http://localhost:3000/vapiai-test");

      const json = await res.json();
      setData(json);
      console.log({ json });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Welcome to Bezs</h1>
      <Button size="sm" onClick={testSecureAPI}>
        Test Secure API
      </Button>
    </div>
  );
}
