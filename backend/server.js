import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { Product } from "./model/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in creating product", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.delete("/api/products/:id", async (req, res)=>{
  const { id } = req.params
  console.log("id:", id)

  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Product Delete"})
  }catch(error){
    res.status(404).json({
      success: false,
      message: "Product Not found",
    });
  }
})

app.listen(5000, () => {
  console.log("im server running http://localhost:5000/ here");
  connectDB();
});
