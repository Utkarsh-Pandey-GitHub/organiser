"use client"
import { usePathname } from "next/navigation"
import { TestDrawer } from "./TestDrawer"
import Link from "next/link";
import { LogIn, LogInIcon, LogOut, SignalMedium, User, User2, UserRoundPlus } from "lucide-react";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";


function NavBar() {
  const path = usePathname();
  const {user} = useUser();


  return (
    <div className="flex gap-5 justify-around items-center w-auto  m-2 p-4 bg-opacity-40 rounded-3xl border border-white border-opacity-85 flex-wrap">
      <div></div>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <Link href={"/"} className={`${path.endsWith('/')  ? "text-black bg-white font-semibold " : ""} rounded-full p-2`}>
          Explore
        </Link>
        <Link href={"/connect"} className={`${path.startsWith("/connect") ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Connect
        </Link>
        <Link href={"/messages"} className={`${path.startsWith("/messages") ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Messages
        </Link>
        <Link href={"/schedules"} className={`${path.startsWith("/schedules") ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Events
        </Link>
        
        <div className="bg-neutral-400 text-black">
          <TestDrawer />
        </div>
      </div>
      {!user?<div className="flex gap-3 justify-center items-center">
      {/* <Link href={"/signup"} className="flex gap-1">
          <User color={path=="/profile"?"blue":"white"} />
          </Link> */}
        <Link href={"/login"} className="flex gap-1">
          Login
          <LogIn color={path.startsWith("/login") ? "blue" : "white"} />
        </Link>
        <Link href={"/signup"} className="flex gap-1">
          Signup
        <UserRoundPlus color={path.startsWith("/signup") ? "blue" : "white"} />
        </Link>
      </div>:
      <div className="flex place-items-center gap-2 text-sm text-gray-300">
        <UserButton/>
        Welcome {user.firstName}!
        <SignOutButton children={<LogOut/>}/>
        <User2/>
      </div>
      }

    </div>
  )
}

export default NavBar
