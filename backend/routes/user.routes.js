const express = require("express")
const { UserModel } = require("../model/user.model")


const userRouter = express.Router()

userRouter.post("/", async(req, res)=>{

try {
    const userDetails = new UserModel(req.body)
    await userDetails.save()
    res.status(201).send({"msg": "Added successfully!"})
} catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({"msg":"Error occurred while adding data."});
}
})


userRouter.get("/", async(req, res)=>{
    try {
        let data = await UserModel.find()
        res.send({"data":data})
        
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send({"msg":"Error occurred while getting data."})
    }
})

module.exports = {userRouter}