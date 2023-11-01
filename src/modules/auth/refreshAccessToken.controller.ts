import { Response } from "express";
import { RequestContext } from "interfaces";

export const refreshAccessTokenController = (
  req: RequestContext,
  res: Response,
) => {
  try {
    // decrypt refresh token
    // validate refresh token
    // gen new refresh token
    res.sendResponse(null);
  } catch (e) {
    res.sendResponse(null, 500);
  }
};
