"use client"
import { useCurrentUser } from '@/app/_context/UserProvider';
import React from 'react'
import UserCard from '../_components/UserCard';


function page() {
    const {currentUser} = useCurrentUser() as any;
  return (
    <div className='container'>
      {currentUser?.expand?.friend_requests?.map((user:any,index:any)=>{
        return(<UserCard user={user} key={index}/>)
      })}
    </div>
  )
}

export default page
