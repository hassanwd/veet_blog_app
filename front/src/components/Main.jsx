import React, { useEffect, useState } from 'react'
import { TiHome } from "react-icons/ti";
import { IoMdPulse } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BsCompass } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Stories from './Stories';
import Create from './Create';
import Post from './Post';
import SmallNav from './SmallNav';
import SidePosts from './SidePosts';
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPosts, logout } from '../redux/Slices';


function Main() {
  const [localuser, setlocaluser] = useState()
  // const {loginUser}  = useSelector((state)=>state.posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()



  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user')) || {}
    setlocaluser(user)
  }, [])




  const logoutFunc = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setlocaluser({})
    dispatch(logout())
    navigate('/')
  }

  const { Allposts, comments,likes,  posts, loginUser } = useSelector((state) => state.posts)
  console.log(Allposts);


  useEffect(() => {
    dispatch(getAllPosts())
  }, [posts, comments, likes])

  return (
    <div>
      <div className='main w-full h-auto bg-[#0F172A] flex'>

        <div className='leftside w-auto xl:w-1/4 h-screen sticky top-0 left-0 px-5 py-5 hidden  bg-[#1E293B] sm:flex flex-col gap-5'>
          <div className='w-full h-auto  py-2 px-2 '> <IoMdPulse className='xl:hidden text-2xl text-pink-600' /><span className='text-xl text-white font-bold hidden xl:block'>INSTA PULSE</span></div>
          <ul className='w-full h-auto flex flex-col gap-1'>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <TiHome className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Home</span>
            </li>
            <li className=' text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl   py-2 px-2 flex items-center  gap-3'>
              <IoSearch className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Search</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <BsCompass className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Explore</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <RiMessage3Line className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Messages</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <LuHeart className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Notifications</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <FaUserFriends className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Peoples</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <FaRegCircleUser className='text-2xl text-white' /> <span className='hidden text-white xl:block'>User</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <FiLogOut onClick={logoutFunc} className='text-2xl text-white' /> <span className='hidden text-white xl:block'>Logout</span>
            </li>
          </ul>
        </div>



        <div className=' w-full h-full  flex flex-col gap-5 '>

          <div className=' w-full h-auto xl:px-40  '>
            <Stories className=' ' />
          </div>
          <div className=' w-full h-auto flex flex-col justify-center items-center'>

            <div className='w-20 h-20  rounded-full overflow-hidden'>
              <img src={localuser?.image} alt="" />
            </div>
            <p className='text-xl  text-white'>{localuser?.name}</p>
          </div>
          <div className=' w-full h-full   px-5 md:px-20 xl:px-40 pb-14 md:pb-5'>
            <div className=' w-full h-full flex lg:flex-row flex-col lg:gap-8 gap-5'>
              <div className='py-3 flex flex-col lg:gap-5 gap-3 lg:w-[60%] h-full '>
                <Create />
              <div className='py-3 flex flex-col-reverse lg:gap-5 gap-3  h-full '>

                {Allposts && Allposts?.map((item, index) => {
                  return (
                        <Post key={index} items={item} loggedinUser={loginUser} />
                  )
                })}
              </div>
              </div>
              <div className='lg:w-[40%] h-full  py-3'>
                <SidePosts />
              </div>

            </div>

          </div>
        </div>
      </div>
      <SmallNav />
    </div>
  )
}

export default Main