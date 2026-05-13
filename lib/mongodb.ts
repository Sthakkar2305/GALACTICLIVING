import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn("MONGODB_URI is not set. API routes will use demo data until configured.");
}

type Cached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = global as typeof globalThis & { mongooseCache?: Cached };

const cached = globalWithMongoose.mongooseCache ?? { conn: null, promise: null };
globalWithMongoose.mongooseCache = cached;

export async function connectDb() {
  if (!uri) return null;
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri, { dbName: "galactic_living" });
  cached.conn = await cached.promise;
  return cached.conn;
}
