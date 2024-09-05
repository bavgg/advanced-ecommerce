import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  order_id: { type: mongoose.Schema.Types.UUID, ref: "Order" },
  tracking_number: { type: String },
  shipping_method: {
    type: String,
    enum: ["standard", "express", "overnight"],
    required: true,
  },
  status: {
    type: String,
    enum: ["preparing", "shipped", "in_transit", "delivered"],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Shipping = mongoose.model("Shipping", shippingSchema);
export default Shipping;
