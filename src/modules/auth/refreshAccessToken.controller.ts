import { Response } from "express";
import { RequestCxt } from "interfaces";
import { genJwtToken, verifyJwtToken } from ".";
import { userRepo } from "modules/users";

interface IReq extends RequestCxt {
  body: {
    refreshToken: string;
  };
}

export const refreshAccessTokenController = async (
  req: IReq,
  res: Response,
) => {
  try {
    const { refreshToken } = req.body;

    const { user: tokenUser } = verifyJwtToken(refreshToken, "refresh");

    const dbUser = await userRepo.findOne({
      where: {
        id: tokenUser.id,
        refreshToken,
      },
    });

    if (!dbUser) {
      return res.sendResponse(null, 401);
    }

    const accessToken = genJwtToken(dbUser, "access");

    res.sendResponse({ accessToken });
  } catch (e) {
    res.sendResponse(null, 500);
  }
};
