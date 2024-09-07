import express from "express";
import CartItem from "../models/CartItem.js";
import GenericController from "../controllers/GenericController.js";

const router = express.Router();

const model = CartItem;
const controller = new GenericController(model);

router.get("/", controller.getAll);
router.post("/", controller.create);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
