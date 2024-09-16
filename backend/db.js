const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://uma:uma@cluster0.bquns.mongodb.net/management?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true
}).then(()=> console.log("MongoDB connected"))
.catch(( error)=> console.log("Error in connecting to MongoDB",  error

))
  
module.exports = {connect}