import React, { useEffect, useState } from 'react'
import pic3 from '../assets/avatar-5.jpg'
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../redux/Slices';


function AddComment({postID,loggedinUser}) {
    

    const [token, setToken] = useState("")
    const [localUser, setlocalUser] = useState({})

    const [inpVal, setinpVal] = useState("")
    const dispatch = useDispatch()  

    useEffect(() => {
        let localToken = JSON.parse(localStorage.getItem('token')) || ""
       let loginUser = JSON.parse(localStorage.getItem("user")) || {}
        setlocalUser(loginUser)
        setToken(localToken)
      }, [])
    
      const clearCommentField = () => {
        setinpVal('');
      };

    // console.log(inpVal);
    return (
        <div>
            <div className='flex h-10 justify-center items-center gap-3'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src={localUser.image} alt="" />
                </div>
                <input 
                    value={inpVal}
                    onChange={(e)=>setinpVal(e.target.value)}
                    type="text" name="" id="" placeholder='Write a comment'
                    className='w-[70%] h-full rounded-full outline-none px-5'

                />
                <button>
                    <IoSend onClick={()=>{
                        dispatch(addComment({inpVal,token,postID}))
                        clearCommentField()
                        }} className=' text-xl text-blue-500' />
                </button>
            </div>
        </div>
    )
}

export default AddComment