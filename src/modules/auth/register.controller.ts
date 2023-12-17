import { EUser } from "entities/user.entity";
import { Request, Response } from "express";
import { checkUserExist } from ".";
import { userRepo } from "modules/users";
import { encryptString } from "utils/crypt.utils";

interface IReq extends Request {
  body: Pick<EUser, "email" | "password" | "firstName" | "lastName">;
}

// validate input
export const registerController = async (req: IReq, res: Response) => {
  try {
    const { email, password } = req.body;

    await checkUserExist(email);

    await userRepo.save({
      ...req.body,
      password: encryptString(password),
    });

    res.sendResponse(true);
  } catch (e) {
    console.error(e);
    res.sendResponse(null, 500);
  }
};
