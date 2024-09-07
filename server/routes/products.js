import express from "express";
import ProductController from "../controllers/ProductController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

const path = "/products";

router.get(path, ProductController.getAll);
router.get(path + "/:slug", ProductController.getOne);

router.post(path, authMiddleware, ProductController.create);
router.put(path + "/:slug", authMiddleware, ProductController.update);
router.delete(path + "/:slug", authMiddleware, ProductController.delete);

export default router;
