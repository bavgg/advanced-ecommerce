import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin", "vendor"], required: true },
  phone_number: { type: String },
  address: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
