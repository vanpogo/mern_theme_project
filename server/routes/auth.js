import { Router } from "express";
import * as authController from "../controllers/auth.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = new Router();

router.post("/register",authController.register)
router.post("/login",authController.login)
router.get("/check",checkAuth,authController.check)

export default router;