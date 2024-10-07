import React from 'react'
import pic1 from '../assets/avatar-2.jpg'
import pic2 from '../assets/avatar-5.jpg'
import pic3 from '../assets/avatar-6.jpg'
import pic4 from '../assets/avatar-7.jpg'
import pic5 from '../assets/product-1.jpg'
import pic6 from '../assets/product-3.jpg'

function SidePosts() {
  return (
    <div>
      <div className='mainSideContainer  flex flex-col gap-5'>
        <div className='w-full h-auto bg-[#1E293B] rounded-xl px-3 py-3 flex flex-col gap-5'>
          <h1 className='text-white text-lg font-bold mx-2'>Peoples you might know</h1>
          <div className=' w-full h-14  flex justify-between items-center'>
            <div className=' w-1/2 h-full  items-center flex gap-2 text-white'>
              <div className='w-[40px] h-[40px]  overflow-hidden rounded-full'>
                <img src={pic1} alt="" />
              </div>
              <div className=' leading-tight'>
                <p className='font-medium'>John Doe</p>
                <small>Suggested For You</small>
              </div>
            </div>
            <button className=' w-24 h-10 bg-[#334150] rounded-full text-white font-medium'>Follow</button>
          </div>
          <div className=' w-full h-14  flex justify-between items-center'>
            <div className=' w-1/2 h-full   items-center flex gap-2 text-white'>
              <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                <img src={pic2} alt="" />
              </div>
              <div className=' leading-tight'>
                <p className='font-medium'>Parveen</p>
                <small>Followed By Ahmed</small>
              </div>
            </div>
            <button className=' w-24 h-10 bg-[#334150] rounded-full text-white font-medium'>Follow</button>
          </div>
          <div className=' w-full h-14  flex justify-between items-center'>
            <div className=' w-1/2 h-full   items-center flex gap-2 text-white'>
              <div className='w-[40px] h-[40px]  overflow-hidden rounded-full'>
                <img src={pic3} alt="" />
              </div>
              <div className=' leading-tight'>
                <p className='font-medium'>Sakina</p>
                <small>Followed By You</small>
              </div>
            </div>
            <button className=' w-24 h-10 bg-[#334150] rounded-full text-white font-medium'>Follow</button>
          </div>
          <div className=' w-full h-14  flex justify-between items-center'>
            <div className=' w-1/2 h-full   items-center flex gap-2 text-white'>
              <div className='w-[40px] h-[40px]  overflow-hidden rounded-full'>
                <img src={pic4} alt="" />
              </div>
              <div className=' leading-tight'>
                <p className='font-medium'>Nasreen</p>
                <small>Suggested For You</small>
              </div>
            </div>
            <button className=' w-24 h-10 bg-[#334150] rounded-full text-white font-medium'>Follow</button>
          </div>
        </div>

        <div className='w-full h-auto bg-[#1E293B] rounded-xl px-3 py-3 flex flex-col gap-5'>
          <h1 className='text-white text-lg font-bold mx-2'>Premium Products</h1>
          <div className='grid grid-cols-2 gap-2'>
            <div className=' wfull h-[200px] bg-red-400 rounded-lg overflow-hidden'>
              <img className='w-full h-full' src={pic5} alt="" />
              <h1>Cleansing Fresh</h1>
            </div>
            <div className='wfull h-full bg-red-700 rounded-lg overflow-hidden'>
              <img className='w-full h-full' src={pic6} alt="" />
            </div>
          </div>
        </div>
        <div className='w-full h-auto bg-[#1E293B] rounded-xl px-3 py-3 flex flex-col gap-5'>
          <h1 className='text-white text-lg font-bold mx-2'>Members</h1>

          <div className='grid grid-cols-6 gap-3'>
            <div className=' w-10 h-10  rounded-full relative '>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>
              <img className=' rounded-full w-full h-full' src={pic1} alt="" />
            </div>
            <div className=' w-10 h-10  rounded-full relative'>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

            <img className=' rounded-full w-full h-full' src={pic2} alt="" />

            </div>
            <div className=' w-10 h-10  rounded-full relative'>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

            <img className=' rounded-full w-full h-full' src={pic3} alt="" />

            </div>
            <div className=' w-10 h-10  rounded-full relative'>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

            <img className=' rounded-full w-full h-full' src={pic4} alt="" />

            </div>
            <div className=' w-10 h-10  rounded-full relative'>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

            <img className=' rounded-full w-full h-full' src={pic1} alt="" />

            </div>
            <div className=' w-10 h-10  rounded-full relative'>
              <div className=' w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

            <img className=' rounded-full w-full h-full' src={pic2} alt="" />

            </div>
          </div>
        </div>
        <div className='w-full h-auto bg-[#1E293B] rounded-xl px-3 py-3 flex flex-col gap-5'>

        </div>
      </div>
    </div>
  )
}

export default SidePosts