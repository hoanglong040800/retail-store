import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },

  db: {
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 1433),
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  },

  jwt: {
    access: {
      secret: process.env.ACCESS_SECRET || "",
      expire: process.env.ACCESS_EXPIRATION_TIME || "10m",
    },

    refresh: {
      secret: process.env.REFRESH_SECRET || "",
      expire: process.env.REFRESH_EXPIRATION_TIME || "30d",
    },
  },
};
