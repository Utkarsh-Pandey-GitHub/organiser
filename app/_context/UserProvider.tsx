"use client"
import { useUser } from "@clerk/nextjs";
import { createContext, use, useContext, useEffect, useState } from "react";
import { createUser, getUserByEmail } from "../_backend_actions/actions";

const currentUserContext = createContext(null)

export function useCurrentUser(){
    return useContext(currentUserContext);
}

export function UserProvider({
    children
}:{
    children: React.ReactNode
}){
    const [currentUser, setCurrentUser] = useState<any>();
    const {isSignedIn,isLoaded,user}= useUser();
    useEffect(()=>{
        if(!isSignedIn || !isLoaded) return;
        console.log(user);
        getUserByEmail(user?.primaryEmailAddress?.emailAddress as any)
        .then((data:any)=>{
            if (data) {
                
            if(!currentUser){
                setCurrentUser(data);
            }
            else{
                createUser(user as any)
                .then((data:any)=>{
                    setCurrentUser(data)
                })
                .catch((error:any)=>{
                    console.log(error)
                })
            }
        }})
        .then(()=>{
            console.log(currentUser);
        })
        .catch((error:any)=>{
            console.log(error);
        })
        console.log(user);
    },[user,currentUser])
    return (
        <currentUserContext.Provider value={[currentUser,setCurrentUser] as any}>
            {children}
        </currentUserContext.Provider>
    )
}