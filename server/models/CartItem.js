import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  cart_id: { type: mongoose.Schema.Types.UUID, ref: "Cart" },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);
export default CartItem;
