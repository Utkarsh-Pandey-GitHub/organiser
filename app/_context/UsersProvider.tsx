"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllUsers } from '../_backend_actions/actions';
import { useUser } from '@clerk/nextjs';
import { useCurrentUser } from './UserProvider';
const UsersContext = createContext(null);

export function useUsers() {
  return useContext(UsersContext);
}

function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState()
  const { isSignedIn, isLoaded, user } = useUser();
  const {currentUser}=useCurrentUser() as any;
  useEffect(() => {
    if (!isSignedIn || !isLoaded ||!user||!currentUser) return;
    
    getAllUsers(currentUser)
      .then((data: any) => {

        if (!users) {
          setUsers(data.filter((f:any)=>!currentUser?.expand?.friends.map((friend:any)=>friend.email).includes(f.email)));
        }
      })
      .catch((error: any) => {
        console.log(error);
      })
    console.log("users",users);

  }, [users, currentUser])


  return (
    <UsersContext.Provider value={{ users } as any}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider
