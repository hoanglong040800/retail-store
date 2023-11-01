import { ENV, JWT_TOKEN_LIFE } from "constant";
import { EUser } from "entities";
import { sign } from "jsonwebtoken";
import { userRepo } from "modules/users";
import { genRandomHexToken } from "utils/crypt.utils";

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

export const genJwtAccessToken = (user: EUser) => {
  return sign({ user }, ENV.jwt.secret, {
    algorithm: "HS256",
    expiresIn: JWT_TOKEN_LIFE,
  });
};

export const genRefreshToken = async (userId: string): Promise<string> => {
  const refreshToken = genRandomHexToken();

  await userRepo.save({ id: userId, refreshToken });

  return refreshToken;
};
