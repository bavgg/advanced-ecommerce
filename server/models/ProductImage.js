import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  url: { type: String, required: true },
  alt_text: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const ProductImage = mongoose.model("ProductImage", productImageSchema);
export default ProductImage;
