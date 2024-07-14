"use client"
import { usePathname } from "next/navigation"
import { TestDrawer } from "./TestDrawer"
import Link from "next/link";
import { Boxes, CalendarCheck, Handshake, LogIn, LogInIcon, LogOut, MessageSquare, MessagesSquare, Newspaper, SignalMedium, Telescope, User, User2, UserRoundPlus } from "lucide-react";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { useCurrentUser } from "../_context/UserProvider";
import { useEffect, useState } from "react";
import { getUrl } from "../_backend_actions/actions";


function NavBar() {
  const path = usePathname();
  const { user } = useUser();
  const { currentUser } = useCurrentUser() as any;
  const [dp, setDp] = useState<string | any>()
  useEffect(() => {
    if (currentUser?.profile_picture) {
      getUrl(currentUser.profile_picture, currentUser).then((url: any) => {
        setDp(url);
      })
    }
  }, [currentUser?.profile_picture])

  return (
    <div className="flex gap-5 justify-around items-center w-auto  m-2 p-4 bg-opacity-40 rounded-3xl border border-white border-opacity-85 flex-wrap">
      <div className="xl:block hidden"></div>
      <div className="flex justify-center items-center gap-2 flex-wrap">

        <Link href={"/"} className={`${path.endsWith('/') ? "text-black bg-white font-semibold " : ""} rounded-full p-2 flex`}>
          <Telescope className="mx-1"/>
          <div className="sm:block hidden">
          Explore
          </div>
        </Link>
        <Link href={"/connect"} className={`${path.startsWith("/connect") ? "text-black bg-white font-semibold" : ""} rounded-full p-2 flex `}>
          <Handshake className="mx-1"/>
          <div className="sm:block hidden">
          Connect
          </div>
        </Link>
        <Link href={"/messages"} className={`${path.startsWith("/messages") ? "text-black bg-white font-semibold" : ""} rounded-full p-2 flex`}>
          <MessagesSquare className="mx-1"/>
          <div className="sm:block hidden">
          Messages
          </div>
        </Link>
        <Link href={"/schedules"} className={`${path.startsWith("/schedules") ? "text-black bg-white font-semibold" : ""} rounded-full p-2 flex`}>
        <CalendarCheck className="mx-1"/>
        <div className="sm:block hidden">
          Events
        </div>
        </Link>
        <Link href={"/posts"} className={`${path.startsWith("/posts") ? "text-black bg-white font-semibold" : ""} rounded-full p-2 flex`}>
        <Newspaper className="mx-1"/>
        <div className="sm:block hidden">
          Posts
        </div>
        </Link>

        <div className=" text-white flex">
          

          <TestDrawer />
        </div>
      </div>
      {!user ? <div className="flex gap-3 justify-center items-center">
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
      </div> :
        <div className="flex place-items-center gap-2 text-sm text-gray-300">
          <Link href={"/profile"} className="rounded full p-1 h-14 w-14">
            <img src={currentUser?.profile_picture ? dp : currentUser?.dp_link} alt="user" className="rounded-full object-cover aspect-auto w-full h-full hover:scale-105" />
          </Link>
          Welcome {currentUser?.name.split(" ")[0]}!
          <SignOutButton children={<LogOut />} />
          <User />
        </div>
      }

    </div>
  )
}

export default NavBar
