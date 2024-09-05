import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  slug: { type: String, unique: true, required: true },

  name: { type: String, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  stock_quantity: { type: Number, required: true },
  sku: { type: String, unique: true, required: true },

  
  description: { type: String },
  category_id: { type: mongoose.Schema.Types.UUID, ref: "Category" },
  vendor_id: { type: mongoose.Schema.Types.UUID, ref: "User" },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
