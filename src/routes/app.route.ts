import { Express } from "express";
import { usersRouter } from ".";

export default (app: Express) => {
  app.use("/users", usersRouter);
};
