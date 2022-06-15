const express = require("express")
const userSignUpController=require("../Controller/userSignUpController")


const route = express.Router();

route.post("/signup",userSignUpController.userSignup)
route.post('/login',userSignUpController.userLogin)


module.exports=route;