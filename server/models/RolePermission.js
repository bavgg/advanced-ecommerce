import mongoose from "mongoose";

const rolePermissionSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Types.UUID,
    required: true,
  },
  role_id: { type: mongoose.Schema.Types.UUID, ref: "Role" },
  permission_id: { type: mongoose.Schema.Types.UUID, ref: "Permission" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const RolePermission = mongoose.model(
  "RolePermission",
  rolePermissionSchema
);
export default RolePermission;
