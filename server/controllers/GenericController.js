export default class GenericController {
  constructor(model) {
    this.model = model;
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
      res.status(500).json({ message: "Server error", error });
    }
  };

  create = async (req, res) => {
    try {
      const data = new this.model(req.body);
      await data.save();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

  update = async (req, res) => {
    try {
      const data = await this.model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

  delete = async (req, res) => {
    try {
      const data = await this.model.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
}
