import { SignIn } from '@clerk/nextjs'

import React from 'react'

function page() {
    return (
        
        <div className='flex justify-center  w-fit place-items-center mx-auto my-auto'>
            <SignIn path='/login'/>            
        </div>
    )
}

export default page
