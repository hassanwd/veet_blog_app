import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoMdPulse } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BsCompass } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { useDispatch } from 'react-redux';
import { logout } from '../redux/Slices';
import { Navigate } from 'react-router-dom';

function SmallNav() {
const dispatch = useDispatch()

  const logoutFunc = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    // setlocaluser({})
    // dispatch(logout())
    // Navigate('/')
  }
  return (
    <div>
        <div className=' w-full h-14 sm:hidden fixed bottom-0 flex  bg-[#1E293B]'>
        <ul className='w-full h-auto flex justify-evenly  gap-1'>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <TiHome className='text-3xl text-white'/> <span className='hidden text-white xl:block'>Home</span>
            </li>
            <li className=' text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl   py-2 px-2 flex items-center  gap-3'>
              <IoSearch  className='text-3xl text-white' /> <span className='hidden text-white xl:block'>Search</span>
            </li>
           
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <RiMessage3Line className='text-3xl text-white' /> <span className='hidden text-white xl:block'>Messages</span>
            </li>
            
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <FaUserFriends className='text-3xl text-white' /> <span className='hidden text-white xl:block'>Peoples</span>
            </li>
            <li className='text-lg text-center hover:bg-slate-700 cursor-pointer rounded-xl  py-2 px-2 flex items-center gap-3'>
              <FiLogOut onClick={logoutFunc} className='text-3xl text-white' /> <span className='hidden text-white xl:block'>User</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SmallNav