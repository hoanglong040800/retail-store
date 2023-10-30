import express from "express";
import { ENV } from "./constants";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = ENV.server.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
