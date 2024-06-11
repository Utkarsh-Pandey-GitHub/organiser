"use client"
import {  AtSign, Bookmark, Paperclip, Send, Star, User, VideoIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function UserCard() {
    const path = usePathname();
    
    const [save,setSave] = React.useState(false)
    
    return (
        <div className='flex w-40 bg-white bg-opacity-10 p-4 place-items-center justify-center rounded-lg flex-col m-2 hover:shadow hover:shadow-white shrink max-w-1/4 grow '>
            <div className='rounded-full p-2 bg-white w-fit h-fit bg-opacity-20 '>
                <User size='40' />
            </div>
            <div>
                <div className='text-white font-semibold'>John Doe</div>
                <div 
                className='text-gray-400'>@johndoe</div>
                

            </div>
            {path.includes("myconnections")||path.includes("message")?
            <div className='flex gap-1'>
                <Link href={"/messages"} className='flex place-items-center'>
                <Send size='25' className=' hover:text-opacity-100 text-opacity-40 text-white'/>
                </Link>
                <Link href={"/vidcall"} className='flex place-items-center'>
                <VideoIcon size='35' className='hover:text-opacity-100 text-opacity-40 text-white'/>
                </Link>
                <Link href={"/"} className='flex place-items-center'>
                <Paperclip size='30' className='hover:text-opacity-100 text-opacity-40 text-white'/>
                </Link>
                <Link href={"/"} className='flex place-items-center'>
                <AtSign size='30' className='hover:text-opacity-100 text-opacity-40 text-white '/>
                </Link>
               
            </div>
            :
            <div>
                <button className='bg-indigo-700 bg-opacity-50 text-white rounded-full p-2 focus:bg-opacity-90 active:bg-opacity-90 active:bg-white active:text-indigo-700 focus:bg-white focus:text-indigo-700 focus:font-bold'>Connect</button>
            </div>}

        </div>
    )
}

export default UserCard
