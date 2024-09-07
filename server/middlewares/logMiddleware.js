import jwt from "jsonwebtoken";
import AuditLog from "../models/AuditLog.js";

const logMiddleware = (action, table_name) => {
  return async (req, res, next) => {
    AuditLog.create({
      user_id: req.user._id,
      action,
      table_name,
      record_id: '', 
      changes: ''
    });
  };
};

export default logMiddleware;
