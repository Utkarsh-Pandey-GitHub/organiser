import React from 'react'
import UserCard from '../_components/UserCard'
import Link from 'next/link'

function page() {
  return (
    <div className='container  flex justify-center '>
      <div className='flex justify-center '>

<div className='flex flex-wrap justify-start    w-fit '>


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
        {/* <UserCard /> */}
        {/* <UserCard /> */}

      </div>
    </div>
  )
}

export default page
