import { ENV } from "constant";
import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "mssql",
  ...ENV.db,

  // settings
  synchronize: true,
  logging: true,
  extra: {
    trustServerCertificate: true,
  },

  // related
  entities: ["src/entities/*.entity.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});

export const connectDb = () => {
  db.initialize()
    .then(() => {
      console.log("[Database] Connected to database");
    })
    .catch((err) => {
      console.error("[Database] Error when connecting");
      console.error(err);
    });
};
