import { hashSync } from "bcrypt";
import { SALT_ROUNDS } from "constant";
import { randomBytes } from "crypto";

export const encryptString = (str: string): string => {
  return hashSync(str, SALT_ROUNDS);
};

export const genRandomHexToken = (): string => {
  return randomBytes(64).toString("hex");
};
