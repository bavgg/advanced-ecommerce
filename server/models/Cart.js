import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
