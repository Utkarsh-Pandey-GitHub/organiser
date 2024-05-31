import React from 'react'
import UserCard from '../_components/UserCard'
import Link from 'next/link'

function page() {
  return (
    <div className='container  '>
      <div className=' flex flex-wrap justify-start'>


        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />

      </div>
    </div>
  )
}

export default page
