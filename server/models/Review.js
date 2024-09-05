import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
