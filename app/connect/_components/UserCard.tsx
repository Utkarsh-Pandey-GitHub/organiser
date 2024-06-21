"use client"
import { acceptFriendRequest, getUrl, rejectFriendRequest, sendFriendRequest } from '@/app/_backend_actions/actions';
import { useCurrentUser } from '@/app/_context/UserProvider';
import { useUsers } from '@/app/_context/UsersProvider';
import { AtSign, Bookmark, Check, CheckCheck, Handshake, Paperclip, Send, Star, User, VideoIcon, X } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type props = {
    user: any
}
function UserCard({ user }: props) {
    const path = usePathname();
    const { currentUser } = useCurrentUser() as any;
    const { chatRecieverUser, setChatRecieverUser } = useUsers() as any;
    const [dp,setDp]  = useState<any>();

    useEffect(() => {
        getUrl(user.profile_picture,user).then((url)=>{
            setDp(url);
        })
      
        
      }, [currentUser?.profile_picture])
    
    const [save, setSave] = React.useState(false)

    return (
        <div className='flex w-40 bg-white bg-opacity-10 p-4 place-items-center justify-center rounded-lg flex-col m-2 hover:shadow hover:shadow-white shrink max-w-1/4 grow '>
            <div className='flex justify-center items-center rounded-full p-0.5 bg-white w-24 h-24 bg-opacity-10 group'>
                {user.dp_link ? <img src={user.profile_picture?dp:user.dp_link} className='rounded-full group-hover:scale-105 object-cover aspect-auto w-full h-full' /> : <User size='40' />}

            </div>
            <div className='mb-1 max-w-full  '>
                <div className='text-inherit font-semibold flex justify-center peer'>{user.name}</div>
                <div
                    className='text-gray-400 text-xs flex text-wrap  overflow-hidden justify-center'>{user?.friends?.filter((friend: any) => currentUser?.friends.includes(friend)).length} mutual friends</div>


            </div>
            {path.includes("myconnections") || path.includes("message") ?
                <div className='flex gap-1'>
                    <Link href={"/messages"} className='flex place-items-center ' onClick={() => setChatRecieverUser(user)}>
                        <Send size='25' className=' hover:text-opacity-100 text-opacity-40 text-white peer' />
                    </Link>
                    <Link href={"/vidcall"} className='flex place-items-center'>
                        <VideoIcon size='35' className='hover:text-opacity-100 text-opacity-40 text-white' />
                    </Link>
                    <Link href={"/"} className='flex place-items-center'>
                        <Paperclip size='30' className='hover:text-opacity-100 text-opacity-40 text-white' />
                    </Link>
                    <Link href={"/"} className='flex place-items-center'>
                        <AtSign size='30' className='hover:text-opacity-100 text-opacity-40 text-white ' />
                    </Link>

                </div>
                : 
                    <div>

                        {
                            (currentUser.pending_friend_request_response.includes(user?.id)) ?
                                <button className='flex gap-1 items-center justify-center bg-indigo-700 bg-opacity-50 text-white rounded-full p-2 focus:bg-opacity-90 active:bg-opacity-90 active:bg-white active:text-indigo-700 focus:bg-white focus:text-indigo-700 focus:font-bold text-xs' onClick={()=>rejectFriendRequest(user,currentUser)}>

                                    <CheckCheck /> Cancel Request 
                                </button>
                                :
                                (currentUser.friend_requests.includes(user?.id)) ?
                                    
                                    
                                    <div className='flex gap-3'>
                                        <div className='text-emerald-400 flex flex-col items-center justify-center'
                                        onClick={()=>acceptFriendRequest(currentUser,user)}>
                                         <Check />Accept
                                        </div>
                                        <div className='text-rose-400 flex flex-col items-center justify-center' onClick={()=>rejectFriendRequest(currentUser,user)}>
                                            <X />Reject
                                         </div>
                                    </div>
                                    :
                                    <button className='flex gap-1 items-center justify-center bg-indigo-700 bg-opacity-50 text-white rounded-full p-2 focus:bg-opacity-90 active:bg-opacity-90 active:bg-white active:text-indigo-700 focus:bg-white focus:text-indigo-700 focus:font-bold' onClick={()=>
                                    sendFriendRequest(user,currentUser)
                                    }>
                                    
                                    <Handshake size='20' className='ml-1' />
                                    Connect
                                   
                                </button>

                        }

                    </div>}

        </div>
    )
}

export default UserCard
