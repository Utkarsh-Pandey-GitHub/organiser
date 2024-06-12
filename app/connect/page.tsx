"use client"
import React from 'react'
import UserCard from './_components/UserCard'
import { useUsers } from '../_context/UsersProvider'

function page() {
  const { users } = useUsers() as any;
  return (
    <div className='container  flex justify-start '>
      <div className='flex justify-start '>

        <div className='flex flex-wrap justify-start    w-fit '>
          {users && users.map((u: any, index: any) => {
            return (

              <UserCard user={u} key={index} />
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default page
