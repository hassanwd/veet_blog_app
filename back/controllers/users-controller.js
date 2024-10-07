const userModelSchema = require("../models/user-model-Schema");
const jwt = require('jsonwebtoken')



const userSignup = async(req,res)=>{
    let dbres = await userModelSchema.create(req.body)
       if(dbres){
        res.send({msg:"user signedUp"})
       }
}

const userLogin = async(req,res)=>{
    // console.log(req.body);
    let dbres = await userModelSchema.findOne({email:req.body.email})
    if(dbres){

        if(dbres.password !== req.body.password){
           return res.send({msg:"wrong password"})
        }
        else{
            let token = jwt.sign({id:dbres._id},process.env.TOKEN_KEY,{expiresIn:"2h"})
            res.send({user:dbres,token:token})
        }
        
    }
    else{
        res.send({msg:"user not found"})

    }
}

module.exports = {userSignup,userLogin}