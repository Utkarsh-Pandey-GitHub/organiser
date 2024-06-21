"use client"
import React from 'react'
import Loader from '@/public/loader.svg';
import Image from 'next/image';

function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image src={Loader} alt='loader' height={144} width={144}/>
    </div>
  )
}

export default page
