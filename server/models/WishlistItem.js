import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  wishlist_id: { type: mongoose.Schema.Types.UUID, ref: "Wishlist" },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const WishlistItem = mongoose.model("WishlistItem", wishlistItemSchema);
export default WishlistItem;
