import express from "express";
import ProductController from "../../controllers/ProductController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";
import postLogMiddleware from "../../middlewares/postLogMiddleware.js";

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:slug", ProductController.getOne);

router.post("/", authMiddleware, ProductController.create, postLogMiddleware);
router.put(
  "/:slug",
  authMiddleware,
  ProductController.update,
  postLogMiddleware
);
router.delete(
  "/:slug",
  authMiddleware,
  ProductController.delete,
  postLogMiddleware
);

export default router;
