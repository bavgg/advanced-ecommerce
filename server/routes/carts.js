import express from "express";
import Cart from "../models/Cart.js";
import GenericController from "../controllers/GenericController.js";

const router = express.Router();

const model = Cart;
const controller = new GenericController(model);

const path = "/carts";

router.get(path, controller.getAll);
router.post(path, controller.create);
router.get(path + "/:id", controller.getById);
router.put(path + "/:id", controller.update);
router.delete(path + "/:id", controller.delete);

export default router;
