"use client"
import React, { useEffect } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import UserListItem from '../_components/users/UserListItem'
import UserListHeading from '../_components/users/UserListHeading'
import { useChatSocket } from '../_context/ChatSocketProvider'
import { AnyARecord } from 'dns'
import { useCurrentUser } from '../_context/UserProvider'
import { useUsers } from '../_context/UsersProvider'


function page() {
    const { socket, messages, setMessages, setRecieveOnline } = useChatSocket();
    const {currentUser}  = useCurrentUser() as any;
    const [currentMessage, setCurrentMessage] = React.useState<any>('');
    
    
    const {chatRecieverUser, setChatRecieverUser} = useUsers() as any;
    const [category,setCategory] = React.useState<any>({
        friends:true,
        groups:false,
    });

    function sendMessage() {
        socket.emit('message',   currentMessage,  {name:currentUser.name.split(' ')[0],email:currentUser.email},  '@msgslot',  "@msgslot" );
    }
    // function switchcurrentChat(chatId: any) {
    //     setCurrentChat(chatId);
    //     socket.emit('switch-chat', chatId);
    // }
    useEffect(() => {
        const element = document.getElementById('scrollId');
        element?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])
    console.log(currentUser)
    
    return (
        <div className='mx-5 '>
            <ResizablePanelGroup direction='horizontal' style={{ "height": "90vh" }} className='rounded-md'>
                <ResizablePanel defaultSize={25}>
                    <ResizablePanelGroup direction='vertical' className='rounded-tr-md' >
                        <ResizablePanel defaultSize={5}>
                            <UserListHeading category={category} setCategory={setCategory}/>
                        </ResizablePanel>
                        <ResizablePanel defaultSize={95}>
                           
                            {category.friends?<UserListItem contacts={currentUser?.expand?.friends}  />:
                            <UserListItem contacts={currentUser?.expand?.groups} />}

                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle className='bg-gray-100 bg-opacity-30 rounded-t-lg ' />
                <ResizablePanel defaultSize={75}>

                    {chatRecieverUser?<div className=" h-full ">
                        <ResizablePanelGroup direction='vertical'>
                            <ResizablePanel defaultSize={5} className='rounded-l-full'>
                                <div className="bg-gray-100 bg-opacity-30 h-full flex justify-start place-items-center font-semibold">
                                    <img
                                        className="w-12 h-12 rounded-full object-cover mr-4  hover:scale-125"
                                        src={chatRecieverUser?.dp_link}
                                        alt=""
                                    />

                                    {chatRecieverUser?.name}
                                </div>
                            </ResizablePanel>
                            <ResizablePanel defaultSize={95}>
                                <div className=" flex   justify-evenly h-full">
                                    <div className="flex flex-col h-full p-1 w-full bg-black">
                                        <div className=" overflow-y-auto h-full">

                                            <ul className="flex flex-col mb-4 gap-4 py-4 w-full  h-full">


                                                {messages && messages.map((message: any,index:any) => {
                                                    return (
                                                        <div key={index}>
                                                            <div>
                                                                <p className={` m-1 text-gray-300 text-xs flex ${message.sender.email !=currentUser.email ?"justify-start":"justify-end"} "mx-2`}>{message.sender.email ==currentUser.email ?"you":message.sender.name}</p>
                                                            </div>
                                                            {message.sender.email ==currentUser.email ?
                                                                <li className="flex justify-end m-2">
                                                            
                                                                    <div className="bg-gray-50 rounded-xl px-4 py-2 max-w-[80%]">
                                                                        <p className="text-black text-sm">{message.msg}</p>
                                                                    </div>
                                                                </li> :
                                                                <li className="flex justify-start m-2">
                                                           
                                                                    <div className="bg-gray-100 rounded-xl px-4 py-2 md:max-w-[60%] max-w-[80%] bg-opacity-10 ">
                                                                        <p className="text-gray-300 text-md">{message.msg}</p>
                                                                    </div>
                                                                </li>}
                                                        </div>
                                                    )
                                                })}
                                                <li id='scrollId'></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizablePanel defaultSize={6}>
                                <div className="bg-black h-full flex justify-center place-items-center p-3 ">
                                    <div className="flex justify-center items-center h-16 w-full">

                                        <input type="text" className=" border-gray-300 rounded-lg py-2 px-4 w-full  mr-4 text-gray-800" placeholder="Type a message..." value={currentMessage} onChange={(e) => { setCurrentMessage(e.target.value) }} />
                                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded " onClick={sendMessage}>Send</button>
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>:<div className="h-full flex justify-center items-center">Please select a chat</div>}
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>
    )
}

export default page
