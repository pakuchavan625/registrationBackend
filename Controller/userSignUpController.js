
const { response } = require("express")
const users = require("../Model/userSignUpController")

exports.userSignup=(req,res)=>{

    const {firstName,lastName,phone,email,password}= req.body
    
    const usersObj = new users({
        firstName,
        lastName,
        phone,
        email,
        password
    })

    usersObj.save()
    .then((resolve)=>{
        res.status(200).json({
            messsage:"User SignedUp successfully",
            user:resolve
            
        })
        
    }).catch((error)=>{
        res.status(500).json({
            message:error
        })
    })
}


exports.userLogin=(req,res)=>{
    const {email,password}= req.body
    users.find({email,password})
    .then((response)=>{
        res.status(200).json({
            message:"user logged in successfully",
            user:response
        })
    }).catch((err)=>{
        res.status(500).json({
            message:err
        })
    })

}