"use client"
import { usePathname } from "next/navigation"
import { TestDrawer } from "./TestDrawer"
import Link from "next/link";
import { LogIn, LogInIcon, SignalMedium, User, UserRoundPlus } from "lucide-react";


function NavBar() {
  const path = usePathname();


  return (
    <div className="flex gap-5 justify-around items-center w-full  m-2 p-4 bg-opacity-40 rounded-3xl border border-white border-opacity-85">
      <div></div>
      <div className="flex ustify-center items-center gap-2 ">
        <Link href={"/"} className={`${path == "/" ? "text-black bg-white font-semibold " : ""} rounded-full p-2`}>
          Explore
        </Link>
        <Link href={"/connect"} className={`${path == "/connect" ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Connect
        </Link>
        <Link href={"/messages"} className={`${path == "/messages" ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Messages
        </Link>
        <Link href={"/schedules"} className={`${path == "/schedules" ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Events
        </Link>
        <Link href={"/saved"} className={`${path == "/saved" ? "text-black bg-white font-semibold" : ""} rounded-full p-2`}>
          Saved
        </Link>
        <div className="bg-neutral-400 text-black">
          <TestDrawer />
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center">
      {/* <Link href={"/signup"} className="flex gap-1">
          <User color={path=="/profile"?"blue":"white"} />
          </Link> */}
        <Link href={"/login"} className="flex gap-1">
          Login
          <LogIn color={path == "/login" ? "blue" : "white"} />
        </Link>
        <Link href={"/signup"} className="flex gap-1">
          Signup
        <UserRoundPlus color={path == "/signup" ? "blue" : "white"} />
        </Link>
      </div>

    </div>
  )
}

export default NavBar
