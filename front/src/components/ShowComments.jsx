import React from 'react'
import pic2 from '../assets/avatar-2.jpg'
import pic3 from '../assets/avatar-7.jpg'

function ShowComments({ item }) {
    return (
        <div>
            <div className='flex flex-col gap-2'>

                {item?.comments.map((e, i) => {
                    return (
                        <div key={i} className=' w-full h-full    flex items-center gap-3 '>
                            <div className='w-8  h-8 rounded-full overflow-hidden'>
                                <img src={e.user.image[0]} alt="" />
                            </div>
                            <div className='w-full h-auto rounded-2xl border p-2 text-white'>
                                <p className='font-bold'>{e.user.name}</p>
                                <p>{e.text}</p>
                            </div>
                        </div>
                    )
                })}



            </div>
        </div>
    )
}

export default ShowComments