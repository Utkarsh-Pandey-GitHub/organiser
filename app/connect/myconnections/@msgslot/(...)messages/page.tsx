"use client"
import { Maximize2, UserCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import Draggable from 'react-draggable'


function page() {
    const router = useRouter();
    const handleClick = (e: any) => {
        
        router.back();

    }
    const handleMaximize = (e: any) => {
        router.refresh();
    }
    return (
        <Draggable>
            <div className='absolute bg-gray-600  h-auto w-fit m-auto rounded-lg top-1/3 left-1/3 p-2 bg-opacity-90'>
                <div className='absolute left-0 top-0 right-0 bg-gray-600 w-full flex p-1 rounded-lg justify-between place-items-center '>
                    <div className='flex place-items-center gap-2'>

                        <UserCircle size={30} />
                        <div>

                            User Name
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
                <div className="flex flex-col  max-w-sm  p-1 py-7">
                    <ul className=" flex flex-col mb-4 gap-4 py-4 overflow-y-auto h-60 pr-0">


                        <li className="flex justify-start">
                            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-gray-900 text-sm">Hey, how are you?</p>
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-black bg-opacity-35 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-white text-sm">I'm good, thanks! How about you?</p>
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-gray-900 text-sm">I'm doing great, thanks for asking!</p>
                            </div>
                        </li>

                        <li className="flex justify-start">
                            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-gray-900 text-sm">Hey, how are you?</p>
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-black bg-opacity-35 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-white text-sm">I'm good, thanks! How about you?</p>
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                <p className="text-gray-900 text-sm">I'm doing great, thanks for asking!</p>
                            </div>
                        </li>

                    </ul>
                    <div className="flex justify-center items-center h-fit fixed bottom-0">

                        <input type="text" className="border border-gray-300 rounded-lg py-1 px-2 w-full max-w-lg mr-4 text-black" placeholder="Type a message..." />
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded">Send</button>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default page
