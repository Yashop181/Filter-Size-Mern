const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');
const path = require('path');

// @desc    Create a product
// @route   POST /api/products
// @access  Public
const addProduct = asyncHandler(async (req, res) => {
    const { name, size } = req.body;
    const image = req.file;

    if (!image) {
        res.status(400).json({ message: 'No image uploaded' });
        return;
    }

    const product = new Product({
        name,
        size,
        image: image.path,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc    Get products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const size = req.query.size;
    let products;

    if (size) {
        products = await Product.find({ size });
    } else {
        products = await Product.find({});
    }

    res.json(products);
});

module.exports = { addProduct, getProducts };
