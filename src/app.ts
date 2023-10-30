import express from "express";
import { ENV } from "./constant";
import appRoutes from "./app.routes";
import { connectDb } from "./config";

const app = express();
const port = ENV.server.port;

appRoutes(app);

connectDb(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
