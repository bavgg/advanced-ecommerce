import AuditLog from "../models/AuditLog.js";

export default class GenericController {
  constructor(model) {
    this.model = model;
    this.modelName = model.modelName;
  }
  getAll = async (req, res) => {
    try {
      const data = await this.model.find();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };

  getById = async (req, res) => {
    try {
      const data = await this.model.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error" + error.message });
    }
  };

  create = async (req, res) => {
    if (!((req.user.role === "admin") | (req.user.role === "vendor"))) {
      return res.status(403).json({
        message: "You do not have permission to modify this resource.",
      });
    }

    try {
      const data = new this.model(req.body);

      await data.save();

      req.log = {
        user_id: req.user._id,
        action: "create",
        table_name: Product.modelName.toLowerCase(),
        record_id: data._id,
        changes: data,
      };

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  update = async (req, res) => {
    try {
      const data = await this.model.findOneAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      req.log = {
        user_id: req.user._id,
        action: "update",
        table_name: Product.modelName.toLowerCase(),
        record_id: data._id,
        changes: data,
      };

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const data = await this.model.findByIdAndDelete(req.params.id);
      if (!data) {
        return res
          .status(404)
          .json({ message: "Failed to delete, data not found" });
      }

      req.log = {
        user_id: req.user._id,
        action: "delete",
        table_name: Product.modelName.toLowerCase(),
        record_id: data._id,
        changes: data,
      };

      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };
}
