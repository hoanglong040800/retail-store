import { Request, Response } from "express";

export const responsePong = (_: Request, res: Response) => {
  try {
    res.send("pong");
  } catch (error) {
    res.status(500);
  }
};
