import {configureStore} from '@reduxjs/toolkit'
import  getAllPosts  from './Slices'


const store = configureStore({
    reducer:{
        posts:getAllPosts
    }
})
export default store