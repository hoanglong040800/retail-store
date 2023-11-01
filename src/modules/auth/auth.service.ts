import { ACCESS_TOKEN_LIFE, ENV, REFRESH_TOKEN_LIFE } from "constant";
import { EUser } from "entities";
import { sign } from "jsonwebtoken";
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
) => {
  let secret: string;
  let tokenLife: string;

  switch (type) {
    case "access":
      secret = ENV.jwt.accessSecret;
      tokenLife = ACCESS_TOKEN_LIFE;
      break;

    case "refresh":
      secret = ENV.jwt.refreshSecret;
      tokenLife = REFRESH_TOKEN_LIFE;
      break;
  }

  return sign({ user }, secret, {
    algorithm: "HS256",
    expiresIn: tokenLife,
  });
};

export const genRefreshToken = async (userId: string): Promise<string> => {
  const refreshToken = genJwtToken({ id: userId }, "refresh");

  await userRepo.save({ id: userId, refreshToken });

  return refreshToken;
};
