import mongoose, { Schema } from "mongoose";

const galleryItemSchema = new Schema(
  {
    propertyId: String,
    propertyName: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: Number,
    description: String,
    image: { type: String, required: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.models.GalleryItem || mongoose.model("GalleryItem", galleryItemSchema);
