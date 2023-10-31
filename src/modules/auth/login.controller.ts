import { Request, Response } from "express";

export const LoginController = (_: Request, res: Response) => {
  try {
    // check email
    // check password
    // generate new jwt access + refresh token
    // return access + refresh token
  } catch (e) {
    res.sendResponse(500);
  }
};
