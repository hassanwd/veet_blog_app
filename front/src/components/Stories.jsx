import React from 'react'
import pic1 from '../assets/avatar-2.jpg'
import pic2 from '../assets/avatar-5.jpg'
import pic3 from '../assets/avatar-6.jpg'
import pic4 from '../assets/avatar-7.jpg'



function Stories() {

    
    return (
        <div>
            
                <h1 className=' text-2xl font-bold text-white'>Stories</h1>
                <div className='sm:w-full w-[90%] m-auto justify-evenly flex overflow-auto py-5 '>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic1} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic2} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic3} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic4} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic1} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic2} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic3} alt="" />
                    </div>
                    <div className='lg:w-[80px] lg:h-[80px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] lg:border-4 border:1 overflow-hidden  border-gray-400 rounded-full'>
                        <img src={pic4} alt="" />
                    </div>
                    
                </div>
            
        </div>
    )
}

export default Stories