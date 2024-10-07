const likeModelSchema = require("../models/like-model-schema")
const postModelSchema = require("../models/post-model-schema")
const userModelSchema = require("../models/user-model-Schema")

const postController = async(req,res)=>{
  
  req.body.userID = req.user._id

     let responce = await postModelSchema.create(req.body)
     
     let user = await userModelSchema.findOne({_id:responce.userID})
     
       console.log(user);
     user.posts.push(responce?._id)
     user.save()

     if(responce){
      return res.send({msg:"post created"})
     }
  
}

const getAllpost = async(req,res)=>{
  // console.log("get all ");
  var posts = await postModelSchema.aggregate([
    {
      $lookup:{
        from: "user2",
        localField: "userID",
        foreignField: "_id",
        as: "userID",
      }
    },
    {
      $unwind: "$userID"
    },

    {
      $lookup:{
        from: "comments",
        localField: "_id",
        foreignField: "post",
        as: "comments",
        pipeline: [
          {
            $lookup:{
              from: "user2",
              localField: "user",
              foreignField: "_id",
              as: "user"
            },
          },
          {
            $unwind: "$user"
          },
        ],
        
      },
      
    },
    { $addFields:{
      totalComments:{$size:"$comments"}
    }},
    {
      $lookup:{
        from: "likes",
        localField: "_id",
        foreignField: "post",
        as: "likes",
      }
    },
    {
      $addFields: {
        totalLikes: { $size: "$likes" }
      }
    },


  ])
  


  res.json(posts)
  
}

const likepost = async(req,res)=>{
 
  req.body.user = req.user._id

  const existed = await likeModelSchema.findOne({user: req.user._id, post:req.body.post})
  console.log(existed, "existed");
  if(!existed){
    let responce = await likeModelSchema.create(req.body)
    return res.json("Liked")
  }
  
  await likeModelSchema.findOneAndDelete({user: req.user._id })
  return res.json("disliked")

  
}



module.exports = {postController, getAllpost, likepost}