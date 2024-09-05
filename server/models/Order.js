import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  total_amount: { type: mongoose.Types.Decimal128, required: true },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    required: true,
  },
  shipping_address: { type: String },
  payment_status: {
    type: String,
    enum: ["pending", "completed", "failed", "refunded"],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
