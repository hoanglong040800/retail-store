import { Express } from "express";
import { usersRouter } from "./modules/users";

export default (app: Express) => {
  app.use("/users", usersRouter);
};
