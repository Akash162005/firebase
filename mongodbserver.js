const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/productdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema and Model
const ProductSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});
const Product = mongoose.model("Product", ProductSchema);

// Routes
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);
