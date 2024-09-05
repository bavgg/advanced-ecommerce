import mongoose from "mongoose";

const productAttributeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  product_id: { type: mongoose.Schema.Types.UUID, ref: "Product" },
  attribute_name: { type: String, required: true },
  attribute_value: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const ProductAttribute = mongoose.model(
  "ProductAttribute",
  productAttributeSchema
);
export default ProductAttribute;
