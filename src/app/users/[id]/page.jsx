import React from 'react'
import Image from 'next/image'

function UserPage({params}) {
    const userId = params.id;

  return (
    <div className='mt-8 md:mt-20 w-full'>
        <div className='flex flex-col justify-center items-center  px-10  bg-red-50'>
            <p className='mb-2'>Title </p>
            <p className='mb-2'>Name </p>
        </div>
        <div className='flex justify-center  bg-green-50'>
            <Image src="" alt="Profile image"  className=' w-4/5 md:w-3/5 shadow-md rounde-full bg-red-50' />
        </div>
        
    </div>
  )
}

export default UserPage