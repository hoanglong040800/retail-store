import { UserEntity } from "entities";
import { ENV } from "constant";
import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "mssql",
  ...ENV.db,

  // settings
  synchronize: true,
  logging: false,
  extra: {
    trustServerCertificate: true,
  },

  // related
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});

export const connectDb = (callbackFn: () => void) => {
  db.initialize()
    .then(() => {
      console.log("[Database] Connected to database");

      callbackFn();
    })
    .catch((err) => {
      console.error("[Database] Error when connecting");
      console.error(err);
    });
};
