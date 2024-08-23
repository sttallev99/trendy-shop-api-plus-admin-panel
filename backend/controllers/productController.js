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


export { addProduct }