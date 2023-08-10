import express from "express";
import {  } from '../controllers/posts.js';

const router = express.Router();

router.get("/", (req, res) => res.send("Welcome to squash express server!"));

export default router;
