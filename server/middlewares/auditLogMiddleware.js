import AuditLog from "../models/AuditLog.js";

const auditLogMiddleware = (action, table_name) => {
  return async (req, res, next) => {
    try {
      const user_id = req.user?._id || 'anonymous'; 

      AuditLog.create({
        user_id,
        action,
        table_name
      });
      next();
   
    } catch (error) {

      res.status(500).json({ message: "Server error " + error.message });
      // or next()
    }
  };
} 

export default auditLogMiddleware;
