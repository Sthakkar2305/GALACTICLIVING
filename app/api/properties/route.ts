import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";
import Property from "@/models/Property";
import { properties } from "@/lib/data";

export async function GET() {
  const db = await connectDb();
  if (!db) return NextResponse.json(properties);
  const docs = await Property.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(docs);
}

export async function POST(request: Request) {
  const db = await connectDb();
  if (!db) return NextResponse.json({ error: "MongoDB is not configured" }, { status: 503 });
  const body = await request.json();
  const doc = await Property.create(body);
  return NextResponse.json(doc, { status: 201 });
}
