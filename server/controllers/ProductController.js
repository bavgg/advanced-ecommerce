import AuditLog from "../models/AuditLog.js";

import Product from "../models/Product.js";

export default class ProductController {
  static getAll = async (req, res) => {
    try {
      const data = await Product.find();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };

  static getOne = async (req, res) => {
    try {
      const data = await Product.findOne({ slug: req.params.slug });
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
      const data = new this.model(req.body);

      await data.save();

      AuditLog.create({
        user_id: req.user._id,
        action: "create",
        table_name: Product.modelName.toLowerCase(),
        record_id: data._id,
        changes: data,
      });

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  static update = async (req, res) => {
    try {
      const data = await Product.findOneAndUpdate(
        { slug: req.params.slug },
        req.body,
        { new: true }
      );
      if (!data) {
        return res.status(404).json({ message: "Product not found" });
      }

      try {
        await AuditLog.create({
          user_id: req.user._id,
          action: "update",
          table_name: Product.modelName.toLowerCase(),
          record_id: data._id,
          changes: data,
        });
      } catch (error) {
        res.status(500).json({ message: "Server error " + error.message });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const data = await Product.findOneAndDelete({ slug: req.params.slug });
      if (!data) {
        return res
          .status(404)
          .json({ message: "Failed to delete, data not found" });
      }
      await AuditLog.create({
        user_id: req.user._id,
        action: "delete",
        table_name: Product.modelName.toLowerCase(),
        record_id: data._id,
        changes: data,
      });
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error " + error.message });
    }
  };
}
