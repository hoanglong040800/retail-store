import { db } from "config";
import { EUser } from "entities/user.entity";

export const userRepo = db.getRepository(EUser);
