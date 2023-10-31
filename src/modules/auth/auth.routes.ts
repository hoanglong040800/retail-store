import { Router } from "express";
import { RegisterController } from "./register.controller";
import { LoginController } from "./login.controller";

const router = Router();

router.get("/login", LoginController);
router.get("/register", RegisterController);

export default router;
