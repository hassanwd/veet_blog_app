import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FcCompactCamera } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupData } from '../redux/Slices';
// import { getAllPosts } from '../redux/Slices';



function Signup() {
    

    const [userObj, setuserObj] = useState({})
    const [img, setimg] = useState("")
    // const navigate = useNavigate() 

    const {allPosts} = useSelector((state)=>state.posts)
    const dispatch = useDispatch()

 
    const createObject = (e) => {
        setuserObj({ ...userObj, [e.target.name]: e.target.value })
    }
    
    const getimg = (e)=>{
        let file = e.target.files[0]
        if(file && file.type.includes('image')){
            setimg(file)
        }
        
    }
    useEffect(()=>{
        if(img !== ""){

            let formData = new FormData()
            formData.append('file',img)
            formData.append('upload_preset','ml_qadeer')

             axios.post('https://api.cloudinary.com/v1_1/dwm5qovuy/image/upload',formData)
            .then((res)=>{
                    console.log(res.data);
                    setuserObj({...userObj,image:res.data.secure_url})
            })

        }

    },[img])

    const submit = async () => {
        // var res = await axios.post('http://localhost:4000/api/signup',userObj)
        // if (res.data) {
        //      navigate('/login')
        // }
        dispatch(signupData(userObj))
    }

    return (
        <div>
            <div className="w-full h-screen bg-[#0F172A] flex justify-center items-center">
                <div className='w-[300px] h-auto bg-white'>
                    <div className='w-full h-[25vh] bg-[#1E293B] flex justify-center items-center text-white'>
                        <div className=' py-1 w-max border-b-2 text-3xl tracking-[5px]'>Signup</div>
                    </div>
                    <div className=' w-full h-[30vh]  px-5 flex justify-between items-center flex-col mt-10'>

                        <input
                            onChange={createObject}
                            name='name'
                            type="text" placeholder='Name'
                            className='w-full h-10  outline-none px-2 border-[#41506b] border-b-2' />
                        <input
                            onChange={createObject}
                            name='email'
                            type="text" placeholder='Email'
                            className='w-full h-10  outline-none px-2 border-[#41506b] border-b-2' />
                        <input
                            onChange={createObject}
                            name='password'
                            type="text" placeholder='Password'
                            className='w-full h-10  outline-none px-2 border-[#41506b] border-b-2' />

                        <label className='text-[50px] cursor-pointer' htmlFor="pic"><FcCompactCamera />

                            <input
                                onChange={getimg}
                                id='pic'
                                name='username'
                                type='file' placeholder='Username'
                                className='w-full h-10 hidden outline-none px-2 border-[#41506b] border-b-2' />
                        </label>

                    </div>
                    <div className=' w-full h-auto  py-5  flex flex-col justify-center items-center gap-3'>
                        <button className='px-5 py-2 bg-[#41506b] text-white' onClick={submit}>Signup</button>
                        <p>already a user?</p>
                        <Link to={'/'}>

                            <button className='px-5 py-2 bg-[#41506b] text-white'>login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup