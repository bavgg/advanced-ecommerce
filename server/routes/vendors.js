import express from "express";
import Vendor from "../models/Vendor.js";
import GenericController from "../controllers/GenericController.js";

const router = express.Router();

const model = Vendor;
const controller = new GenericController(model);

const path = "/vendors";

router.get(path, controller.getAll);
router.post(path, controller.create);
router.get(path + "/:id", controller.getById);
router.put(path + "/:id", controller.update);
router.delete(path + "/:id", controller.delete);

export default router;
