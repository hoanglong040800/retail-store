import { compareSync } from "bcrypt";
import { EUser } from "entities/user.entity";
import { Request, Response } from "express";
import { userRepo } from "modules/users";
import { genJwtToken, genRefreshToken } from ".";

interface IReq extends Request {
  body: Pick<EUser, "email" | "password">;
}

export const loginController = async (req: IReq, res: Response) => {
  try {
    //TODO validate input before processing
    const { email, password } = req.body;

    const user = await userRepo.findOne({
      select: ["id", "email", "firstName", "lastName", "password"],
      where: {
        email,
      },
    });

    if (!user) {
      return res.sendResponse(null, 400, "Email is not register yet");
    }

    if (!compareSync(password, user.password)) {
      return res.sendResponse(null, 400, "Password is not correct");
    }

    const accessToken = genJwtToken(user, "access");
    const refreshToken = await genRefreshToken(user.id);
    const returnedUser = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    res.sendResponse({ accessToken, refreshToken, user: returnedUser });
  } catch (e) {
    res.sendResponse(null, 400);
  }
};
