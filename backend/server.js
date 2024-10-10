import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

app.listen(5000, () => {
  console.log("im server running http://localhost:5000/ here");
  connectDB();
});
