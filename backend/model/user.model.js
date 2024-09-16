const mongoose = require("mongoose")

const schema = mongoose.Schema({
    orderDate: {type: Date, default:Date.now, required:true },
    totalAmount: {type: Number, required:true },
    user: {type: Object, required:true },
    products: {type:[Object], required:true },
   
})

const UserModel = mongoose.model("user", schema)

module.exports = {UserModel}
