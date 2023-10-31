import { Router } from "express";
import { responsePong } from "utils";
import { getAllUserController } from "./controllers";

const router = Router();

router.get("/ping", responsePong);

router.get("/", getAllUserController);

export default router;
