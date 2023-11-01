import { Request, Response } from "express";

export const refreshTokenController = (_: Request, res: Response) => {
  try {
  } catch (e) {
    res.sendResponse(null, 500);
  }
};
