import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({

  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
  location: { type: String },
  updated_at: { type: Date, default: Date.now },
});

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
