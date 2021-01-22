import express from "express";
import mongoose from "mongoose";

const MONGO_URI = "mongodb://username:password@host:port/database?options...";

const app = express();
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

export default app;
