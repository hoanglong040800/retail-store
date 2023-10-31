import { Express } from "express";
import { usersRouter } from "modules/users";
import { authRouter } from "modules/auth";

export default (app: Express) => {
  app.use("/users", usersRouter);
  app.use("/auth", authRouter);
};
