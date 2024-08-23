import productModel from "../models/productModel.js";
import fs from "fs";


//add product item
const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });
    try{
        await product.save();
        res.json({success: true, message: "Product add"});
    } catch(err) {
        console.log(err)
        res.json({success: false, message: "Error"})
    }
}


//all products list
const listProduct = async(req, res) => {
    try{
        const products = await productModel.find({})
        res.json({success: true, data: products})
    } catch(err) {
        console.log(err)
        res.json({success: false, message: "Error"})
    }
}

//remove product item
const removeProduct = async(req, res) => {
    try{
        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`, () => {})
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed"})
    } catch(err) {
        console.log(err)
        res.json({success: false, message: "Error"});
    }
}

export { addProduct, listProduct, removeProduct }