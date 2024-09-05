import express from "express";
import Payment from "../models/Payment.js";
import GenericController from "../controllers/GenericController.js";

const router = express.Router();

const model = Payment;
const controller = new GenericController(model);

const path = "/payments";

router.get(path, controller.getAll);
router.post(path, controller.create);
router.get(path + "/:id", controller.getById);
router.put(path + "/:id", controller.update);
router.delete(path + "/:id", controller.delete);

export default router;
