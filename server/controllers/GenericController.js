export default class BaseController {
  constructor(model) {
    this.model = model;
  }
  getAll = async (req, res) => {
    try {
      const auditLogs = await this.model.find();
      res.status(200).json(auditLogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };

  getById = async (req, res) => {
    try {
      const auditLog = await this.model.findById(req.params.id);
      if (!auditLog) {
        return res.status(404).json({ message: "Audit log not found" });
      }
      res.status(200).json(auditLog);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

  create = async (req, res) => {
    try {
      const newAuditLog = new this.model(req.body);
      await newAuditLog.save();
      res.status(201).json(newAuditLog);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

  update = async (req, res) => {
    try {
      const updatedAuditLog = await this.model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedAuditLog) {
        return res.status(404).json({ message: "Audit log not found" });
      }
      res.status(200).json(updatedAuditLog);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

  delete = async (req, res) => {
    try {
      const deletedAuditLog = await this.model.findByIdAndDelete(req.params.id);
      if (!deletedAuditLog) {
        return res.status(404).json({ message: "Audit log not found" });
      }
      res.status(200).json({ message: "Audit log deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
}
