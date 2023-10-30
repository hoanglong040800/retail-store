import express from "express";
import { ENV } from "./constants";
import { appRouter } from "./routes";

const app = express();
const port = ENV.server.port;

appRouter(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
