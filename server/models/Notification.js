import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  type: {
    type: String,
    enum: ["order_update", "promotion", "account_activity"],
    required: true,
  },
  message: { type: String },
  read_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
