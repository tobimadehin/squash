import * as functions from "firebase-functions";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to squash express server!');
});

app.use("/auth", router);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => functions.logger.info("Squash server is running!"))
  .catch((error) => functions.logger.error(error, "Did not connect!"));

// Fix the authorization later on...
export const squash = functions.runWith({invoker: "public"}).https.onRequest(app);
