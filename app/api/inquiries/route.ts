import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.phone) return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  const db = await connectDb();
  if (!db) return NextResponse.json({ ok: true, demo: true }, { status: 201 });
  const doc = await Inquiry.create(body);
  return NextResponse.json(doc, { status: 201 });
}
