import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },

  description: { type: String },

  parent_id: { type: mongoose.Schema.Types.UUID, ref: "Category" },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
