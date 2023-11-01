import { Router } from "express";
import { registerController } from "./register.controller";
import { loginController } from "./login.controller";
import { refreshTokenController } from "./refresh.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.put("/refresh", refreshTokenController);

export default router;
