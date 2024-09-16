const express = require("express")
const { connect } = require("./db")
const { productRouter } = require("./routes/products.routes")
const cors = require('cors')
const { userRouter } = require("./routes/user.routes")

const app = express()
app.use(cors())

app.use(express.json())
app.use("/products", productRouter)
app.use("/user", userRouter)

app.get("/", (req, res)=>{
res.send("<h1>You in home page</h1>")
})

app.listen(8080, async()=>{
    try {
       await connect
        console.log("Running at port 8080")
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
})
