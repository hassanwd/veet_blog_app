const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text:{
        type:String,
        
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User2"   
    },
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"post2"   
    }
})

module.exports =  mongoose.model('comments',commentSchema)