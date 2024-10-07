
const commentModelSchema = require('../models/comment-model-schema');
const userModelSchema = require('../models/user-model-Schema');

const commentController = async(req,res)=>{
     req.body.user = req.user._id
     console.log(req.body);

     let responce = await commentModelSchema.create(req.body)

      let user = await userModelSchema.findOne({_id:responce.user})

      res?.json(user)

}
module.exports = commentController