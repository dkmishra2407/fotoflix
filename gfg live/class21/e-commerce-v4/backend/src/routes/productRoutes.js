const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { NotFoundError } = require('../core/ApiError');
const { catchAsync } = require('../core/catchAsync');

router.get('/products', catchAsync(async (req, res, next) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/products/:productId', catchAsync(async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
        throw new NotFoundError(`Product with id: ${productId} doesn't exists!`);
    }
    res.json(product);  
}));

module.exports = router;