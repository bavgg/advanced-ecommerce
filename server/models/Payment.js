import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  order_id: { type: mongoose.Schema.Types.UUID, ref: "Order" },
  payment_method: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"],
    required: true,
  },
  amount: { type: mongoose.Types.Decimal128, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "failed", "refunded"],
    required: true,
  },
  transaction_id: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
