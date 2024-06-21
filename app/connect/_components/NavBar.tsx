"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { useCurrentUser } from '@/app/_context/UserProvider';

function NavBar() {
  const path = usePathname();
  const { currentUser } = useCurrentUser() as any;
  return (
    <div className='container my-7 border-b border-zinc-600 p-1 flex gap-3 justify-between flex-wrap'>
      <div className='flex gap-2'>

        <Link href={"/connect"} className={`${path == "/connect" ? "text-black bg-white font-semibold transition-shadow " : ""} rounded-full p-1`}>
          Discover People
        </Link>
        <Link href={"/connect/myconnections"} className={`flex gap-2 ${path == "/connect/myconnections" ? "text-black bg-white font-semibold " : ""} rounded-3xl h-fit p-1 `}>
          <div>

            My Connection
          </div>
          {currentUser?.friends?.length>0&&<div className='rounded-full h-fit w-fit bg-rose-600 text-white  px-1.5'>
            <div>

              {currentUser?.friends?.length}
            </div>
          </div>}
        </Link>
        <Link href={"/connect/friendrequests"} className={`flex gap-2  ${path == "/connect/friendrequests" ? "text-black bg-white font-semibold " : ""} rounded-full p-1 `}>
          <div>
            Friend Requests
          </div>
          {currentUser?.friend_requests?.length>0&&<div className='rounded-full h-fit w-fit bg-rose-600 text-white  px-1.5'>
            <div>

              {currentUser?.friend_requests?.length}
            </div>
          </div>}
        </Link>
      </div>
      <div className='rounded-md flex place-items-center justify-between gap-2 '>

        <input type="text" className='rounded-md flex place-items-center text-black px-1' />
        <Search size={24} />
      </div>

    </div>
  )
}

export default NavBar
