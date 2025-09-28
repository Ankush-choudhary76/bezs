// src/app/api/secure/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Secure API working!",
  });
}
