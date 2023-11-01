import { Router } from "express";
import { registerController } from "./register.controller";
import { loginController } from "./login.controller";
import { refreshAccessTokenController } from "./refreshAccessToken.controller";
import { authGuard } from "middlewares";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.patch("/refresh", authGuard(), refreshAccessTokenController);

export default router;
