import mongoose, { Schema } from "mongoose";

const roomTypeSchema = new Schema(
  {
    name: String,
    price: Number,
    features: [String]
  },
  { _id: false }
);

const propertySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    location: String,
    city: String,
    type: String,
    gender: String,
    price: Number,
    rating: Number,
    occupancy: [String],
    image: String,
    gallery: [String],
    description: String,
    amenities: [String],
    nearby: [String],
    roomTypes: [roomTypeSchema]
  },
  { timestamps: true }
);

export default mongoose.models.Property || mongoose.model("Property", propertySchema);
