const jwt = require('jsonwebtoken')
const postModelSchema = require('../models/post-model-schema')
const userModelSchema = require('../models/user-model-Schema')


const isloggedIn = async(req,res,next)=>{
    let token =  req.headers.authorization
    // console.log(req.body,token);
    
    token = token.split(" ")[1]
     
    if(!token){
        res.json({Msg:"you are not logged in"})
    }
    let verifiedData = jwt.verify(token,process.env.TOKEN_KEY)

    // console.log(verifiedData,"data verified");

    let user = await userModelSchema.findOne({_id:verifiedData.id})

    if(!user){
        res.send({Msg:"user not found"})
    }
    // else{
    //     console.log(user,"userfound");
    // }
    // console.log(user);

    req.user = user

    next()

}
module.exports = isloggedIn