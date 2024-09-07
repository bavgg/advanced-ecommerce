import mongoose from "mongoose";
import User from "./User.js";

const vendorSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  company_name: { type: String, required: true },
  contact_info: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

vendorSchema.pre('save', async function (next) {
  try {
    const user = await User.findById(this.user_id);
    if (!user) {
      return next(new Error('User not found'));
    }
    if (user.role !== 'vendor') {
      return next(new Error('Assigned user is not a vendor'));
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
