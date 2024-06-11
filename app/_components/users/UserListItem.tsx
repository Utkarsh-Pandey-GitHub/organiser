import React, { useEffect } from 'react'

type UserListItemProps = {
    contacts: any[],
    currentChat: any,
    switchcurrentChat: any
}

function UserListItem({ contacts, currentChat, switchcurrentChat }: UserListItemProps) {
    useEffect(() => {
      console.log(contacts)
    
      
    }, [contacts])
    
    console.log(contacts)
    return (
        <div className='h-full w-full overflow-auto '>
            <div className="bg-black  shadow-md    w-full 
                ">
            
                <ul className="divide-y divide-gray-800 ">
                    

                    {contacts && contacts.map((contact: any, index: any) => {

                        return (
                            <li className={`flex items-center py-4 px-6 hover:bg-opacity-10  group hover:bg-slate-400 ${currentChat && "bg-slate-400 -opacity-10"}`} key={index} onClick={() => switchcurrentChat(contact)}>
                                
                                
                                <img
                                    className="w-12 h-12 rounded-full object-cover mr-4 hover:scale-110"
                                    src="https://randomuser.me/api/portraits/men/40.jpg"
                                    alt="User avatar"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-200">{contact.name}</h3>
                                    <p className="text-gray-600 text-base group-hover:text-gray-400">{contact.email}</p>
                                </div>
                            </li>)
                    })}
                </ul>
            </div>


        </div>
    )
}

export default UserListItem
