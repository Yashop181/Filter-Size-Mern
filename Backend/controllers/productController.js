const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

const addProduct = asyncHandler(async (req,res)=>{
    const {name,size} = req.body;
    const image = req.file.path;

    const product = new Product({
        name,
        image,
        size,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});
const getProducts = asyncHandler(async (req,res)=>{
    const size = req.query.size;
    let products;
    if(size){
        products = await Product.find({size});
    }
    else{
        products = await Product.find({});
    }
    res.json(products);
})
module.exports = {addProduct,getProducts};