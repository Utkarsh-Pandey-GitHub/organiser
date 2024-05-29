"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

function NavBar() {
    const path = usePathname();
  return (
    <div className='container'>
      <Link href={"/connect"} className={`${path == "/connect" ? "text-black bg-white font-semibold " : ""} rounded-full p-2`}>
          Discover People
        </Link>
      <Link href={"/connect/myconnections"} className={`${path == "/connect/myconnections" ? "text-black bg-white font-semibold " : ""} rounded-full p-2`}>
          My Connection
        </Link>
        
    </div>
  )
}

export default NavBar
