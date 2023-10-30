import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
};
