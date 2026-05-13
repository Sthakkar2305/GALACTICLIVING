import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: String,
    property: String,
    message: String,
    source: { type: String, default: "website" }
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);
