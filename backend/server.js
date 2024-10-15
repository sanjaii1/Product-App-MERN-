import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`im server running http://localhost:${PORT}/ here`);
  connectDB();
});
