import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";
import Property from "@/models/Property";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: Context) {
  const db = await connectDb();
  if (!db) return NextResponse.json({ error: "MongoDB is not configured" }, { status: 503 });
  const { id } = await context.params;
  const doc = await Property.findByIdAndUpdate(id, await request.json(), { new: true });
  return NextResponse.json(doc);
}

export async function DELETE(_request: Request, context: Context) {
  const db = await connectDb();
  if (!db) return NextResponse.json({ error: "MongoDB is not configured" }, { status: 503 });
  const { id } = await context.params;
  await Property.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
