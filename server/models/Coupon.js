import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  code: { type: String, unique: true, required: true },
  description: { type: String },
  discount_percentage: { type: mongoose.Types.Decimal128, required: true },
  max_uses: { type: Number },
  expires_at: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
