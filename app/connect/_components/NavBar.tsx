"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';

function NavBar() {
    const path = usePathname();
  return (
    <div className='container my-7 border-b border-zinc-600 p-1 flex gap-3 justify-between flex-wrap'>
      <div className='flex gap-2'>

      <Link href={"/connect"} className={`${path == "/connect" ? "text-black bg-white font-semibold transition-shadow " : ""} rounded-full p-1`}>
          Discover People
        </Link>
      <Link href={"/connect/myconnections"} className={`${path == "/connect/myconnections" ? "text-black bg-white font-semibold " : ""} rounded-full p-1 `}>
          My Connection
        </Link>
      </div>
        <div className='rounded-md flex place-items-center justify-between gap-2 '>

        <input type="text"  className='rounded-md flex place-items-center text-black px-1'/>
        <Search size={24}/>
        </div>
        
    </div>
  )
}

export default NavBar
