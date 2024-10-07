import { React, useEffect, useState } from 'react'
import { AiFillPicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/Slices';
import axios from 'axios';



function Create() {
  const [bol, setbol] = useState(false)
  const [userObj, setuserObj] = useState({})
  const [img, setimg] = useState("")
  const [token, settoken] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    let localToken = JSON.parse(localStorage.getItem('token')) || ""
    settoken(localToken)
  }, [])

   

  const createObject = (e) => {
    setuserObj({...userObj,[e.target.name]: e.target.value })
  }
// console.log(userObj);

  const getimg = (e) => {
   
    let file = e.target.files[0]
    if (file && file.type.includes('image')) {
      setimg(file)
    }

  }
  // console.log(img,"image");

  useEffect(() => {
    if (img !== "") {

      let formData = new FormData()
      formData.append('file', img)
      formData.append('upload_preset','ml_qadeer')

      axios.post('https://api.cloudinary.com/v1_1/dwm5qovuy/image/upload', formData)
        .then((res) => {
          console.log(res.data);
          setuserObj({ ...userObj, image: res.data.secure_url })
        })

    }

  }, [img])

  const submit = async () => {
    
    dispatch(createPost({ userObj, token }))
  
    setuserObj({})
    setbol(false)
  }

  return (
    <div>
      <div className={`w-full h-screen fixed z-10 bg-opacity-10 backdrop-blur-md top-0 left-0 bg-black flex justify-center items-center ${bol ? '' : 'hidden'} `}>
        <div className=' w-full md:w-[520px] h-auto bg-[#1E293B] rounded-xl'>
          <div className=' relative text-white font-bold w-full h-12 border-b border-[#2B384B]  flex items-center justify-center'>Create Status
            <VscChromeClose onClick={() => setbol(false)} className='text-white text-xl cursor-pointer absolute top-[50%] right-5 -translate-y-[50%] ' />
          </div>
          <div className='w-full h-full px-5 py-3 flex flex-col gap-3 items-center'>
            <h1 className=' text-lg text-white'>What do you have in mind?</h1>
            <input
              onChange={createObject}
              className=' w-full h-10  outline-none px-5 text-white bg-[#334155] rounded-lg' type="text" name="text" />
            <div className='w-full h-[40vh] bg-gradient-to-b from-[#33415575] to-[#4e50539e] rounded-lg flex flex-col justify-center items-center gap-5'>
              <h1 className='text-xl text-white'>Upload Image</h1>
              <label htmlFor="pic">
                <BsFillImageFill className='text-4xl text-green-600 cursor-pointer' />

              </label>
              <input
                onChange={getimg}
                className='hidden' type="file" name="" id="pic" />

            </div>
            <button onClick={submit} className='px-10 py-2 rounded-lg bg-blue-400'>Create</button>
          </div>
        </div>
      </div>
      <div className=' w-full h-16 bg-[#1E293B] rounded-xl flex justify-center items-center gap-5'>

        <div onClick={() => setbol(true)} className=' w-[60%] h-10 text-white bg-slate-600 flex items-center justify-center rounded-lg'>What do you have in mind?</div>
        <div className=' w-12 h-10 text-blue-600 rounded-lg text-2xl flex items-center justify-center bg-blue-200'><AiFillPicture /></div>
        <div className=' w-12 h-10 text-pink-600 rounded-lg text-2xl flex items-center justify-center bg-pink-200'><FaVideo /></div>
      </div>
    </div>
  )
}

export default Create