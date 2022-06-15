const express= require("express");
const cors = require("cors")
const { default: mongoose } = require("mongoose");
const router = require("./Router/index")

const app = express()

const port=5512;
const hostname="localhost"
// const url="mongodb+srv://DwataTech:h9rCmHazizbz8YGg@cluster0.dpue9.mongodb.net/?retryWrites=true&w=majority"
const url="mongodb+srv://geekaspire:12345@cluster0.dpue9.mongodb.net/?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())
app.use("/",router)

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      
}).then((res)=>{
    app.listen(port,hostname,()=>{
        console.log("MongoDb server is Running")
    })
}).catch((err)=>{
    console.log("MongoDb Server is not connected",err)
})