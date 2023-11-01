import { ENV } from "constant";
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
): string => {
  if (!user) {
    return "";
  }

  delete user.password;

  let token = {
    secret: "",
    expire: "",
  };

  switch (type) {
    case "access":
      token = ENV.jwt.access;
      break;

    case "refresh":
      token = ENV.jwt.refresh;
      break;
  }

  return sign({ user }, token.secret, {
    expiresIn: token.expire,
  });
};

export const genRefreshToken = async (userId: string): Promise<string> => {
  const refreshToken = genJwtToken({ id: userId }, "refresh");

  await userRepo.save({ id: userId, refreshToken });

  return refreshToken;
};
