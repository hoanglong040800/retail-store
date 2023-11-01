import { ENV, mapHttpCodeToMsg } from "constant";
import { NextFunction, Request, Response } from "express";
import { IJwtPayload } from "interfaces";

import { verify } from "jsonwebtoken";
import { getUserByEmail } from "modules/users";

export const formatResponse = (
  _: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.sendResponse = (data, status = 200, message?: string) =>
    res.status(status).json({
      data,
      status,
      message: message || mapHttpCodeToMsg[status],
    });

  next();
};

export const authGuard =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      // TODO implement role-based authorization
      const bearerToken = req.headers.authorization;

      if (!bearerToken) {
        throw new Error();
      }

      const jwtToken = bearerToken.slice(7);

      // use as cause of type checking
      const payload = verify(jwtToken, ENV.jwt.access.secret) as IJwtPayload;

      getUserByEmail(payload.user.email);

      req.context = {
        user: payload.user,
      };

      next();
    } catch (e) {
      res.sendResponse(null, 401);
    }
  };
