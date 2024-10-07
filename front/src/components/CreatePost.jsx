import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FcCompactCamera } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/Slices';


function CreatePost() {

    const [userObj, setuserObj] = useState({})
    const [img, setimg] = useState("")
    const [token, settoken] = useState("")
    const navigate = useNavigate()


    const dispatch = useDispatch()

    useEffect(() => {

        var localToken = JSON.parse(localStorage.getItem('token')) || ""
        settoken(localToken)

        // dispatch(getAllPosts())
    }, [])


    const createObject = (e) => {
        setuserObj({ ...userObj, [e.target.name]: e.target.value })
    }

    const getimg = (e) => {
        let file = e.target.files[0]
        if (file && file.type.includes('image')) {
            setimg(file)
        }

    }
    
    useEffect(() => {
        if (img !== "") {

            let formData = new FormData()
            formData.append('file', img)
            formData.append('upload_preset', 'ml_qadeer')

            axios.post('https://api.cloudinary.com/v1_1/dwm5qovuy/image/upload', formData)
                .then((res) => {
                    console.log(res.data);
                    setuserObj({ ...userObj, image: res.data.secure_url })
                })

        }

    }, [img])



     const submit = async () => {
        dispatch(createPost({userObj,token}))
        //  var res = await axios.post('http://localhost:4000/api/create-post', userObj, {
        //      headers: {
        //          Authorization: `Bearer ${token}`
        //      }
        //  })
        //  console.log(res.data);
        //  if (res.data) {
        //      navigate('/login')
        //  }
     }


    return (
        <div>
            <div className=' w-full  h-auto bg-cyan-400 flex justify-between items-center px-5 '>
                <input
                    className=' h-10 outline-none'
                    type="text"
                    name="text"
                    id=""
                    onChange={createObject}
                    placeholder='Write your post' />

                <label className=' flex items-center  text-[50px]' htmlFor="pic">
                    <span><FcCompactCamera /></span>
                    <span className='text-[18px]'>Choose picture</span>
                    <input
                        className='hidden'
                        type="file"
                        name=""
                        onChange={getimg}
                        id="pic" />
                </label>
                <button
                    onClick={submit}
                    className=' w-20 h-10  bg-slate-300'>Post</button>
            </div>
        </div>
    )
}

export default CreatePost