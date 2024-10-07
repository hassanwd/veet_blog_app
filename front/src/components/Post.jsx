import React, { useEffect, useState } from 'react'
import pic2 from '../assets/avatar-5.jpg'
import postPic from '../assets/avatar-lg-4.jpg'
import { BsThreeDots } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import ShowComments from './ShowComments';
import AddComment from './AddComment';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, getAllPosts } from '../redux/Slices';




function Post({items,loggedinUser}) {
  const dispatch = useDispatch()
  const [token, setToken] = useState("")

 
  const setLike =() => {
    dispatch(addLike({id:items._id, token: token}))
  }
  useEffect(() => {
    let localToken = JSON.parse(localStorage.getItem('token')) || ""
    setToken(localToken)
  }, [])


  // console.log(user,"from post");
  return (
    <div className=''>
     
      
          <div className=' w-full h-auto  flex flex-col gap-2 p-5 rounded-lg bg-[#1E293B]'>
            <div className=' w-full h-14  flex justify-between items-center'>
              <div className=' w-1/2 h-full   items-center flex gap-2 text-white'>
                <div className='w-[40px] h-[40px]  overflow-hidden rounded-full'>
                  <img src={items.userID.image} alt="" />
                </div>
                <div className=' leading-tight'>
                  <p className='font-medium'>{items.userID.name}</p>
                  <small>1 hour ago</small>
                </div>
              </div>
              <button className=' text-2xl text-white font-medium'><BsThreeDots /></button>
            </div>
             <p className=' text-white'>{items.text}</p>
            <div className='pic w-full rounded-lg flex flex-col gap-1'>
              <div className='w-full h-auto lg:h-[40vh] rounded-lg overflow-hidden'>
                <img className='object-cover w-full h-full' src={items.image} alt="" />
              </div>
              <div className='likes w-full h-14  flex justify-between '>
                <div className='likes w-24 h-full  flex justify-evenly items-center'>
                  <div onClick={setLike} className='w-8  h-8 rounded-full bg-[#334150] text-[#ef4444] text-2xl flex items-center justify-center'>

                    <GoHeartFill />
                  </div>
                  <p className='text-white '>{items.totalLikes}</p>


                </div>
                <div className='comments w-24 h-full  flex justify-evenly items-center'>
                  <div className=' w-8 h-8 rounded-full bg-[#334150] text-green-500 text-2xl flex items-center justify-center '>

                    <LiaComment />
                  </div>
                  <p className='text-white '>{items.totalComments}</p>

                </div>
              </div>
            </div>
            {/* comment show section  */}
            <div className=''>
              <ShowComments item={items}  />
            </div>
            {/* add comment section */}
            <div className='w-full h-auto '>
              <AddComment postID={items._id} loggedinUser={loggedinUser} />
            </div>
          </div>


    
    </div>

  )
}

export default Post