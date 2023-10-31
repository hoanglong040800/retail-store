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
