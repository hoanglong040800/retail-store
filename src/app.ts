import express from "express";

import { connectDb } from "config";
import bodyParser from "body-parser";
import appRoutes from "app.routes";
import { ENV } from "constant";
import { formatResponse } from "middlewares";
import cors from "cors";

const app = express();
const port = ENV.server.port;

// parse body json -> object
app.use(bodyParser.json());

// parse complex nested object & array data
app.use(bodyParser.urlencoded({ extended: true }));

// parse response to structure format
app.use(formatResponse);

app.use(cors());

// apply all api routes
appRoutes(app);

// connect to database. it is async fn
connectDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
