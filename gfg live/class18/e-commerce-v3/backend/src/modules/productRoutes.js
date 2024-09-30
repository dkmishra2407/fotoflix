const express = require("express");
const router = express.Router();
const Product = require("../modules/product");

// Route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Route to get a specific product by productId
router.get('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findOne({ productId });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Failed to fetch product" });
    }
});

module.exports = router;
