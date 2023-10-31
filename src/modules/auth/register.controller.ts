import { EUser } from "entities/user.entity";
import { Request, Response } from "express";
import { checkUserExist } from ".";
import { userRepo } from "modules/users";

interface IReq extends Request {
  body: Pick<EUser, "email" | "password" | "firstName" | "lastName">;
}

// validate input
export const registerController = async (req: IReq, res: Response) => {
  try {
    const { email, password } = req.body;

    await checkUserExist(email);

    const newUser = await userRepo.save({
      ...req.body,
      password,
    });

    res.sendResponse(newUser);
  } catch (e) {
    res.sendResponse(500);
  }
};
