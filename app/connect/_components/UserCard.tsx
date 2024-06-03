"use client"
import {  Bookmark, Paperclip, Send, Star, User, VideoIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function UserCard() {
    const path = usePathname();
    
    const [save,setSave] = React.useState(false)
    
    return (
        <div className='flex w-40 bg-white bg-opacity-10 p-4 place-items-center justify-center rounded-lg flex-col m-2 hover:shadow hover:shadow-white grow lg:grow-0'>
            <div className='rounded-full p-2 bg-white w-fit h-fit bg-opacity-20'>
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
                <Send size='25' className='hover:text-cyan-400 '/>
                </Link>
                <Link href={"/vidcall"} className='flex place-items-center'>
                <VideoIcon size='35' className='hover:text-amber-400'/>
                </Link>
                <Paperclip size='35' className='hover:text-rose-400'/>
                <div className='hover:bg-gradient-to-br hover:from-rose-600 hover:via-indigo-700
                hover:to-amber-600
                active:border
                active:border-white 
                rounded-full
                '>

                <Image src='/rem.png' width={40} height={40} 
                alt=''
                className='hover: '/>
                </div>
            </div>
            :
            <div>
                <button className='bg-indigo-700 bg-opacity-50 text-white rounded-full p-2 focus:bg-opacity-90 active:bg-opacity-90 active:bg-white active:text-indigo-700 focus:bg-white focus:text-indigo-700 focus:font-bold'>Connect</button>
            </div>}

        </div>
    )
}

export default UserCard
