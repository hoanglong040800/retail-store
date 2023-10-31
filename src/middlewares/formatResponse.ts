import { mapHttpCodeToMsg } from "constant";
import { NextFunction, Request, Response } from "express";

export const formatResponse = (
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  res.sendResponse = (data, status = 200, message?: string) =>
    res.status(status).json({
      status,
      data,
      message: message || mapHttpCodeToMsg[status],
    });

  next();
};
