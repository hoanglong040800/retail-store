import { ENV } from "./env.constants";

export const SALT_ROUNDS = 10;

export const JWT_TOKEN = {
  access: ENV.jwt.access,
  refresh: ENV.jwt.refresh,
};
