import { JWT_TOKEN } from "constant";
import { EUser } from "entities";
import { IJwtPayload } from "interfaces";
import { sign, verify } from "jsonwebtoken";
import { userRepo } from "modules/users";

export const checkUserExist = async (email: string) => {
  const user = await userRepo.findOne({
    where: {
      email,
    },
  });

  if (user) {
    throw new Error("User already exists");
  }
};

export const genJwtToken = (
  user: Partial<EUser>,
  type: "access" | "refresh",
): string => {
  if (!user) {
    return "";
  }

  delete user.password;

  const token = JWT_TOKEN[type];

  return sign({ user }, token.secret, {
    expiresIn: token.expire,
  });
};

export const verifyJwtToken = (
  token: string,
  type: "access" | "refresh",
): IJwtPayload => {
  return verify(token, JWT_TOKEN[type].secret) as IJwtPayload;
};

export const genRefreshToken = async (userId: string): Promise<string> => {
  const refreshToken = genJwtToken({ id: userId }, "refresh");

  await userRepo.save({ id: userId, refreshToken });

  return refreshToken;
};
