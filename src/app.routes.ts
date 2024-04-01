import { Express } from "express";
import { usersRouter } from "modules/users";
import { authRouter } from "modules/auth";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./generated/swagger-output.json";

export default (app: Express) => {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

  app.use("/users", usersRouter);
  app.use("/auth", authRouter);
};
