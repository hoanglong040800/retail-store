import { db } from "config";
import { EUser } from "entities/user.entity";
import { Request, Response } from "express";

export const getAllUserController = async (_: Request, res: Response) => {
  try {
    const allUsers = await db.manager.find(EUser);

    res.status(200).json(allUsers);
  } catch (err) {
    // TODO handle log error
    res.status(500);
  }
};
