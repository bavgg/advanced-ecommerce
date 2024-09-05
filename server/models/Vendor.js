import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  company_name: { type: String, required: true },
  contact_info: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
