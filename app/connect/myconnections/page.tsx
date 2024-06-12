"use client"
import React from 'react'
import UserCard from '../_components/UserCard'
import Link from 'next/link'
import { useCurrentUser } from '@/app/_context/UserProvider'


function page() {
  const{currentUser}=useCurrentUser() as any;
  return (
    <div className='container  flex justify-start '>
      <div className='flex justify-start '>

        <div className='flex flex-wrap justify-start    w-fit '>


          {currentUser?.expand?.friends && currentUser.expand.friends.map((u: any,index:any) => {
            console.log(u)
            return (

              <UserCard user={u} key={index}/>
            )
          })}
        </div>
        {/* <UserCard /> */}
        {/* <UserCard /> */}

      </div>
    </div>
  )
}

export default page
