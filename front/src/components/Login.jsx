import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { loginData } from '../redux/Slices';


function Login() {
    const [userObj, setuserObj] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {loginUser}= useSelector((state=>state.posts))

    //   console.log(loginUser,"from login");

useEffect(()=>{
    if(loginUser.user && loginUser.token){
         navigate('/main')
    }
    else{
        navigate('/')
    }
},[loginUser])
  

    const getuser = (e) => {
        setuserObj({ ...userObj, [e.target.name]: e.target.value })
    }
    
    const submit = ()=>{
        
        dispatch(loginData(userObj))
        
    }
   
    return (
        <div>
            <div className="w-full h-screen bg-[#0F172A] flex justify-center items-center">
                <div className='w-[300px] h-auto bg-white  '>
                    <div className='w-full h-[25vh] bg-[#1E293B]  flex justify-center items-center text-white'>
                        <div className=' py-1 w-max border-b-2 text-3xl tracking-[5px]'>LOGIN</div>
                    </div>
                    <div className=' w-full h-[15vh] px-5 flex justify-between items-center flex-col mt-10'>

                        <input
                            onChange={getuser}
                            name='email'
                            type="text" placeholder='Email'
                            className='w-full h-10  outline-none px-2 border-[#41506b] border-b-2' />
                        <input
                            onChange={getuser}
                            name='password'
                            type="text" placeholder='Password'
                            className='w-full h-10  outline-none px-2 border-[#41506b] border-b-2' />
                    </div>
                    <div className=' w-full h-auto py-5 flex flex-col justify-center items-center gap-3'>
                        <button onClick={submit} className='px-5 py-2 bg-[#41506b] text-white' >Login</button>
                        <p>Not a user?</p>
                        <Link to={'/signup'}>

                            <button className='px-5 py-2 bg-[#41506b] text-white' >Signup</button>
                        </Link>
                        <Link to={'/forget'}> 
                        
                        <button  className='px-5 py-2 bg-[#41506b] text-white'  >forget</button>
                        
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login