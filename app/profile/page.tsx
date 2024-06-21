"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useCurrentUser } from '../_context/UserProvider'
import { SparklesCore } from '@/components/ui/sparkles'
import { Cake, Calendar, Github, Linkedin, Mail, Newspaper,User, Star, Users } from 'lucide-react'

import Loader from '@/public/loader.svg';
import { useRouter } from 'next/navigation'
import { saveProfile } from '../_backend_actions/actions'
import Link from 'next/link'




function page() {
  const { currentUser } = useCurrentUser() as any;
  

  
  if (!currentUser ) return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image src={Loader} alt='loader' height={144} width={144} />
    </div>
  )
  return (
    <div className='h-screen flex flex-col m-1 '>



      <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center bg-cover w-full absolute' >
          <img src={currentUser.profile_picture ? currentUser.profile_picture : currentUser.dp_link} alt='volcano' width={200} height={200} className='rounded-full w-32 h-32' />
          <h1 className='text-2xl font-bold'>{currentUser?.name}</h1>
          <p className='text-sm'>{currentUser?.email}</p>
        </div>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-48 -z-10"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='h-screen bg-gray-50 bg-opacity-5 mx-5 flex sm:flex-row flex-col '>
        <div className='bg-white rounded-2xl w-max-96 flex flex-wrap gap-3 sm:block sm:w-96 px-5 py-5'>

          <div className='flex text-slate-500 font-semibold justify-start gap-5 items-center w-full '>
            <Newspaper size={32} />
            <div>
              {currentUser?.posts?.length} posts
            </div>
          </div>
          
          <div className='flex text-rose-500 font-semibold justify-start gap-5 items-center w-full'>
            <Users size={32} />
            <div>
              {currentUser?.friends?.length} friends
            </div>
          </div>
          <div className='flex text-cyan-500 font-semibold justify-start gap-5 items-center w-full'>
            <Users size={32} />
            <div>
              {currentUser?.groups?.length} groups
            </div>
          </div>

          <div className='flex text-emerald-500 font-semibold justify-start gap-5 items-center w-full'>
            <Calendar size={32} />
            <div>
              {currentUser?.events?.length} events
            </div>
          </div>
          <div className='flex text-amber-500 font-semibold justify-start gap-5 items-center w-full'>
            <Star size={32} />
            <div>
              {currentUser?.favourite_posts?.length} favourite posts
            </div>
          </div>

        </div>
        <div
          className='w-full text-black bg-white rounded-2xl  m-0.5 gap-2 flex flex-col justify-start p-2.5'
        >
          <div className='flex font-semibold'>
            <User size={32} />
            <div className='flex items-center '>
              {currentUser.name}
            </div>

          </div>
          <div className='flex font-semibold gap-2'>
            <Mail size={32} />
            <div className='flex items-center '>
              {currentUser.email}
            </div>

          </div>


          <div className='flex flex-col h-fit  '>

            <h1 className='text-xl font-semibold flex justify-between'>Bio
            </h1>
            <div className='border-dashed border-2 border-black rounded-2xl h-full p-1 italic'>
              <p>{currentUser.bio ? currentUser.bio : "no bio provided"}</p>
            </div>

          </div>
          <div className='flex font-semibold gap-2'>
            <Cake size={32} />
            <div className='flex items-center '>
              {currentUser.birth_day ? new Date(currentUser.birth_day).toLocaleDateString('en-IN') : "no birthday provided"}
            </div>
          </div>
          <div className='flex font-semibold gap-2'>
            <Github size={32} />
            <div className='flex items-center '>
              {currentUser.github ? currentUser.github : "no github link provided"}
            </div>
          </div>
          <div className='flex font-semibold gap-2 '>
            <Linkedin size={32} />
            <div className='flex items-center '>
              {currentUser.linkedin ? currentUser.linkedin : "no linkedin id provided"}
            </div>
          </div>
          <Link href={"/edit"} className='flex bg-violet-500 text-white rounded-md p-2 mt-5 active:bg-violet-700 font-semibold justify-center' >Edit</Link>
        </div>

      </div>





    </div>
  )
}

export default page
