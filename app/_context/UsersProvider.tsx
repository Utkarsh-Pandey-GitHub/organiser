"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllUsers } from '../_backend_actions/actions';
import { useUser } from '@clerk/nextjs';
const UsersContext = createContext({});

export function useUsers() {
  return useContext(UsersContext);
}

function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState()
  const { isSignedIn, isLoaded, user } = useUser();
  useEffect(() => {
    if (!isSignedIn || !isLoaded ||!user) return;
    
    getAllUsers(user)
      .then((data: any) => {

        if (!users) {
          setUsers(data);
        }
      })
      .catch((error: any) => {
        console.log(error);
      })
    console.log(users);

  }, [users, user])


  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider
