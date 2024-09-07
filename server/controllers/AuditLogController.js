import AuditLog from "../models/AuditLog.js";

export default class AuditLogController {
  static getAll = async (req, res) => {
    try {
      const data = await AuditLog.find();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };

  static getById = async (req, res) => {
    try {
      const data = await AuditLog.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error" + error.message });
    }
  };

  static create = async (req, res) => {
    if (!((req.user.role === "admin") | (req.user.role === "vendor"))) {
      return res.status(403).json({
        message: "You do not have permission to modify this resource.",
      });
    }

    try {
      const data = new AuditLog(req.body);

      await data.save();

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  static update = async (req, res) => {
    try {
      const data = await AuditLog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const data = await AuditLog.findByIdAndDelete(req.params.id);
      if (!data) {
        return res
          .status(404)
          .json({ message: "Failed to delete, data not found" });
      }

      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  static deleteMany = async (req, res) => {
    try {
      const user_id = req.query.user_id;
      const data = await AuditLog.deleteMany({user_id});
      if (!data) {
        return res
          .status(404)
          .json({ message: "Failed to delete, data not found" });
      }

      res.status(200).json({ message: `Data with user_id ${user_id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };
}
