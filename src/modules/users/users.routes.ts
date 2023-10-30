import { Router } from "express";
import { responsePong } from "utils";

const router = Router();

router.get("/ping", responsePong);

export default router;
