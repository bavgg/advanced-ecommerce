import express from "express";
import AuditLogController from "../../controllers/AuditLogController.js";
const router = express.Router();

router.get("/", AuditLogController.getAll);
router.post("/", AuditLogController.create);
router.get("/:id", AuditLogController.getById);
router.put("/:id", AuditLogController.update);
router.delete("/:id", AuditLogController.delete);

export default router;
