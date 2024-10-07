const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    image: [String],
    
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'User2'
    }


})
module.exports = mongoose.model('post2', postSchema)