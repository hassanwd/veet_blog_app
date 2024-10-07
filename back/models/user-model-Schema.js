const  mongoose  = require('mongoose')

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,

    },
    image:{
        type:[String],
        

    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    posts:{
        type: [mongoose.Schema.ObjectId],
        ref: "post"
    }
})

module.exports = mongoose.model('User2',userSchema) 
