import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;