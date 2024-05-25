import { SignIn } from '@clerk/nextjs'

import React from 'react'

function page() {
    return (
        <div>
            <SignIn path='/login'/>
        </div>
    )
}

export default page
