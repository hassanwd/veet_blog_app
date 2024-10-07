import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const signupData = createAsyncThunk('/api/signup', async(userObj)=>{
    let res = await axios.post('http://localhost:5000/api/user-signup',userObj)
    console.log(res.data);
    return res.data
    
})
export const loginData = createAsyncThunk('/api/login', async(userObj)=>{
    let res = await axios.post('http://localhost:5000/api/user-login',userObj)
    // console.log(res.data);
    if(res.data.user || res.data.token){
        localStorage.setItem("user",JSON.stringify(res.data.user))
        localStorage.setItem('token', JSON.stringify(res.data.token))
    }
    return res.data
    
})
export const createPost = createAsyncThunk('/api/posting', async(obj)=>{
            console.log(obj);
    let res = await axios.post('http://localhost:5000/api/new-post',obj.userObj,{
          headers:{
            Authorization:`Bearer ${obj.token}`
          }

       
    })
    console.log(res.data);
    return res.data
    
})


export const getAllPosts = createAsyncThunk('/getpost',async()=>{
    let res = await axios.get('http://localhost:5000/api/getAllposts')
    //   console.log(res.data);
      return res.data
})
export const addComment = createAsyncThunk('/api/addcomments',async(obj)=>{
    //  console.log(obj);
    let res = await axios.post('http://localhost:5000/api/new-comment',{text:obj.inpVal,post:obj.postID},{

             headers:{
                Authorization:`Bearer ${obj.token}`
             }
       
    })
      console.log(res.data);
      return res.data
})

export const getAllComments = createAsyncThunk('/api/getallcomment',async()=>{
    let res = await axios.get('http://localhost:5000/api/get-comments',{
           
    })
    return res.data
})


export const addLike = createAsyncThunk('/api/addLike',async(obj)=>{
    let res = await axios.post('http://localhost:5000/api/add-like',{
           post: obj.id
    },{

        headers:{
           Authorization:`Bearer ${obj.token}`
        }
  
})
console.log(res.data);
    return res.data
})








const slice = createSlice({
    name:"comment",
    initialState:{count:0,
                  showAllPosts:{},
                  signupUser:{},
                  loginUser: JSON.parse(localStorage.getItem("user")) || {},
                  posts:{},
                  Allposts:[],
                  comments:"",
                  likes:"",

                },
    reducers:{
        logout:(state,action)=>{
            state.loginUser = {}
        }
       
    },
    extraReducers:(builder)=>{
        // builder.addCase(getAllPosts.fulfilled,(state,action)=>{
        //     state.showAllPosts = action.payload
        // })
        builder.addCase(signupData.fulfilled,(state,action)=>{
            state.signupUser = action.payload
        })
        builder.addCase(loginData.fulfilled,(state,action)=>{
            state.loginUser = action.payload
        })
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.posts = action.payload
        })
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.Allposts = action.payload
        })
        builder.addCase(addComment.fulfilled,(state,action)=>{
            state.comments = action.payload
        })
        builder.addCase(addLike.fulfilled,(state,action)=>{
            state.likes = action.payload
        })
    }
})
export const  {logout} = slice.actions

export default slice.reducer