import express from "express";
import ProductController from "../../controllers/ProductController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";
import auditLogMiddleware from "../../middlewares/auditLogMiddleware.js";

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:slug", ProductController.getOne);

router.post("/", authMiddleware, auditLogMiddleware('create', 'product'), ProductController.create);
router.put("/:slug", authMiddleware, auditLogMiddleware('update', 'product'), ProductController.update);
router.delete("/:slug", authMiddleware, auditLogMiddleware('delete', 'product'), ProductController.delete);

export default router;
