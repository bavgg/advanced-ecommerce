import express from "express";

import UserController from "../../controllers/UserController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, UserController.getAllUsers);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.authUser);
router.get("/profile", authMiddleware, UserController.getUserProfile);

export default router;
