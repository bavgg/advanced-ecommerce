import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  order_id: { type: mongoose.Schema.Types.UUID, ref: "Order" },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  quantity: { type: Number, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
export default OrderItem;
