import { db } from "config";
import { EUser } from "entities/user.entity";

export const userRepo = db.getRepository(EUser);

export const getUserByEmail = async (email: string) => {
  if (!email) {
    throw new Error("User not found");
  }

  const user = await userRepo.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
};
