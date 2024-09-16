const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required:true },
    imageUrl: {type: String, required:true },
    totalOrders: {type: Number, required:true },
    quantity: {type: Number, required:true },
    price: {type :Number, required: true},
})

const productModel = mongoose.model("products", schema)

module.exports = {productModel}
