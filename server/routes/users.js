import express from "express";

import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

const path = "/users";

router.post(path + "/register", UserController.registerUser);
router.post(path + "/login", UserController.authUser);
router.get(path + "/profile", authMiddleware, UserController.getUserProfile);

export default router;
