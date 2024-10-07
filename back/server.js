const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({path:"./config.env"})
const userRouter = require('./routes/users-route')
const postRouter =  require('./routes/post-route')
const commentRouter = require('./routes/comment-route')
const mongoose  = require('mongoose')


const app = express()

mongoose.connect(process.env.DB).then(()=>{
    console.log("DB connected");
})
app.use(cors())
app.use(express.json())


app.use('/api',userRouter)
app.use('/api',postRouter)
app.use('/api',commentRouter)


app.listen(process.env.PORT,()=>{
    console.log("server is running");
    console.log(process.env.PORT); 
})