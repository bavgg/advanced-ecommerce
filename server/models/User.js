import mongoose from "mongoose";
import bcrypt from "bcrypt";
import AuditLog from "./AuditLog.js";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },

  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin", "vendor"], required: true },

  phone_number: { type: String },
  address: { type: String },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password_hash")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password_hash = await bcrypt.hash(this.password_hash, salt);
  next();
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password_hash);
};

const User = mongoose.model("User", userSchema);
export default User;
