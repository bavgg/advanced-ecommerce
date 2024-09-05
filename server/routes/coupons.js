import express from "express";
import Coupon from "../models/Coupon.js";
import GenericController from "../controllers/GenericController.js";

const router = express.Router();

const model = Coupon;
const controller = new GenericController(model);

const path = "/coupons";

router.get(path, controller.getAll);
router.post(path, controller.create);
router.get(path + "/:id", controller.getById);
router.put(path + "/:id", controller.update);
router.delete(path + "/:id", controller.delete);

export default router;
