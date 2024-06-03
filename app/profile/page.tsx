import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='h-screen flex flex-col'>
        <div className='h-2/3 bg-cover aspect-auto'>

      <Image src='https://images.pexels.com/photos/20410401/pexels-photo-20410401/free-photo-of-snow-in-forest-in-mountains-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600' className='w-auto h-auto bg-cover aspect-auto' alt='' width={400} height={500}/>
        </div>
      <div className='z-10 h-2/3 w-3/4 bg-white bg-opacity-25 rounded-lg place-self-center absolute top-1/4 flex gap-3 flex-wrap'>
        The main panel
        <div className='aspect-auto bg-rose-500 bg-opacity-60 h-1/5 rounded-xl grow border border-white border-opacity-50  hover:shadow hover:shadow-white'></div>
        <div className='aspect-auto bg-lime-500 bg-opacity-60 h-1/5 rounded-xl grow border border-white border-opacity-50  hover:shadow hover:shadow-white'></div>
        <div className='aspect-auto bg-amber-500 bg-opacity-60 h-1/5 rounded-xl grow border border-white border-opacity-50  hover:shadow hover:shadow-white'></div>
        <div className='aspect-auto bg-rose-500 bg-opacity-60 h-1/5 rounded-xl grow border border-white border-opacity-50  hover:shadow hover:shadow-white'></div>
        <div className='aspect-auto bg-indigo-500 bg-opacity-60 h-1/5 rounded-xl grow border border-white border-opacity-50  hover:shadow hover:shadow-white'></div>
      </div>
    </div>
  )
}

export default page
