"use client"
import React from 'react'
import Image from 'next/image'
import pic from '../public/not-found.png'

function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col' >
      <Image src={pic} alt='loader' height={344} width={344} />
      <button className='bg-violet-500 text-white rounded-md p-2 mt-5 active:bg-violet-700' onClick={() => window.location.href = '/'}>Go  Back</button>
    </div>
  )
}

export default page
