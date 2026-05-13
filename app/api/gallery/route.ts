import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";
import GalleryItem from "@/models/GalleryItem";
import { galleryItems } from "@/lib/data";

export async function GET() {
  const db = await connectDb();
  if (!db) return NextResponse.json(galleryItems);
  const docs = await GalleryItem.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json(docs);
}

export async function POST(request: Request) {
  const db = await connectDb();
  if (!db) return NextResponse.json({ error: "MongoDB is not configured" }, { status: 503 });
  const doc = await GalleryItem.create(await request.json());
  return NextResponse.json(doc, { status: 201 });
}
