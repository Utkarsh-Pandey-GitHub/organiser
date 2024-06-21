"use client"
import { useChatSocket } from '@/app/_context/ChatSocketProvider';
import { useCurrentUser } from '@/app/_context/UserProvider';
import { useUsers } from '@/app/_context/UsersProvider';
import { Maximize2, UserCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'


function page() {
    const router = useRouter();
    const { socket, messages, setMessages } = useChatSocket();
    const [currentMessage, setCurrentMessage] = useState<any>('');
    const { currentUser } = useCurrentUser() as any;
    const { chatRecieverUser } = useUsers() as any;

    const handleClick = (e: any) => {

        router.back();

    }
    const handleMaximize = (e: any) => {
        router.push('/');
        router.push('/messages');
    }
    function sendMessage() {
        // socket.emit('message', {message:'Hello',to:'@msgslot'})
        socket.emit('message', currentMessage, { name: currentUser.name.split(' ')[0], email: currentUser.email }, '@msgslot', "@msgslot");
        // setMessages([...messages, { msg: currentMessage, sender: 'user', reciever: 'reciever' }])
        const element = document.getElementById('scrollId');
        element?.scrollIntoView({ behavior: 'smooth' });


    }
    useEffect(() => {
        const element = document.getElementById('scrollId');
        element?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])
    return (
        <Draggable>
            <div className='absolute bg-gray-100  h-auto w-fit m-auto rounded-lg top-1/3 left-1/3 p-2 bg-opacity-85'>
                <div className='absolute left-0 top-0 right-0 bg-black bg-opacity-80 w-full flex p-1 rounded-lg justify-between place-items-center '>
                    <div className='flex place-items-center gap-2'>

                        {chatRecieverUser ?
                            <div className='w-10 h-10 rounded-full'>
                                <img src={`${chatRecieverUser.dp_link}`} alt="" className='w-auto h-auto rounded-full' />
                            </div>
                            : <UserCircle size={40} className='float-left' />}
                        <div>

                            {chatRecieverUser ? chatRecieverUser.name : "User"}
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <div onClick={handleMaximize} className=' text-white focus:text-cyan-600  active:text-cyan-600 ' id="messages_link">
                            <Maximize2 size={20} />
                        </div>
                        <div onClick={handleClick} className=' text-white focus:text-rose-600  active:text-rose-600 ' id="back_link">
                            <X size={20} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  max-w-sm  p-1 pt-7">
                    <ul className=" flex flex-col mb-4 gap-4 pt-4 pb-1 overflow-y-auto h-60 pr-0">

                        <li className="flex justify-end">
                            <div className="bg-black bg-opacity-35 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-white text-sm">I'm good, thanks! How about you?</p>
                            </div>
                        </li>

                        {messages && messages.map((message: any, index: any) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <p className={`  text-gray-900 text-xs flex ${message.sender.email != currentUser.email ? "justify-start mx-0.5" : "justify-end mx-1"} `}>{message.sender.email == currentUser.email ? "you" : message.sender.name}</p>
                                    </div>
                                    {message.sender.email == currentUser.email ? <li className="flex justify-end">
                                        <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                            <p className="text-gray-900 text-sm">{message.msg}</p>
                                        </div>
                                    </li> : <li className="flex justify-start">
                                        <div className="bg-black bg-opacity-35 rounded-lg px-4 py-2 max-w-[80%]">
                                            <p className="text-white text-sm">{message.msg}</p>
                                        </div>
                                    </li>}
                                </div>)
                        })}
                        <li id='scrollId' className='h-0'></li>

                    </ul>
                    <div className="flex justify-center items-center h-fit fixed bottom-1">

                        <input type="text" className="border border-gray-300 rounded-lg py-1 px-2 w-full max-w-lg mr-4 text-black" placeholder="Type a message..." value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default page
