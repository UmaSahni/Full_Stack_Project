const express = require("express")
const { productModel } = require("../model/products.model")

const productRouter = express.Router()

// Adding products

productRouter.post("/", async(req, res)=>{
    try {
        const product = new productModel(req.body);
        await product.save();
        res.status(201).send({"msg":"Data got added!"});
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send({"msg":"Error occurred while adding data."});
    }
});

// Getting all products

productRouter.get("/", async(req, res)=>{
    try {
        const products = await productModel.find()
        res.send({"data": products})
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send({"msg":"Error occurred while getting data."});
    }
    

})

module.exports = {productRouter}