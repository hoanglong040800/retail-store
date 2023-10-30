import express from "express";
import { ENV } from "./constants";
import appRoutes from "./app.routes";

const app = express();
const port = ENV.server.port;

appRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
