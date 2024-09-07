import AuditLog from "../models/AuditLog.js";

const postLogMiddleware = async (req, res, next) => {
  try {

    

    // or put await
    AuditLog.create(req.log);

    if(req.log.action === 'delete'){
      res.status(200).json({ message: "Data deleted successfully" });
    }else {
      res.status(201).json(req.data);
    }
    
  } catch (error) {
    res.status(500).json({ message: "Server error " + error.message });
  }
};

export default postLogMiddleware;
