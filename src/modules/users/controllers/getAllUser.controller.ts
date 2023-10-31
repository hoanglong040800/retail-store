import { db } from "config";
import { EUser } from "entities/user.entity";
import { Request, Response } from "express";

export const getAllUserController = async (_: Request, res: Response) => {
  try {
    const allUsers = await db.manager.find(EUser);

    res.sendResponse(allUsers);
  } catch (err) {
    res.sendResponse(null, 500);
  }
};
