import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.UUID, ref: "User" },
  action: { type: String, required: true },
  table_name: { type: String, required: true },
  record_id: { type: mongoose.Schema.Types.UUID },
  changes: { type: mongoose.Schema.Types.Mixed },
  created_at: { type: Date, default: Date.now },
});

const AuditLog = mongoose.model("AuditLog", auditLogSchema);
export default AuditLog;
