import { Router } from "express";
import { registerController } from "./register.controller";
import { loginController } from "./login.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

export default router;
