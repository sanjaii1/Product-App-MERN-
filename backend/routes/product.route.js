import express from "express";
import {
  updateProduct,
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);

router.put("/:id", updateProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

export default router;
