import { NextResponse } from "next/server";
import { cookieName, signAdminToken, verifyAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const ok = await verifyAdmin(email, password);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookieName, signAdminToken(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/"
  });
  return response;
}
