import * as functions from "firebase-functions";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/posts.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", router);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => functions.logger.info("Squash server is running!"))
  .catch((error) => functions.logger.error(`${error} did not connect!`));

// Fix the authorization later on...
export const squash = functions.runWith({invoker: "public"}).https.onRequest(app);
