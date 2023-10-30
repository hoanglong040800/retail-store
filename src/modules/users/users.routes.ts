import { Router } from "express";
import { responsePong } from "src/utils";

const router = Router();

router.get("/ping", responsePong);

export default router;
