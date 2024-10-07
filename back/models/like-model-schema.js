const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User2"   
    },
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"post2"   
    }
})

module.exports =  mongoose.model('like',likeSchema)