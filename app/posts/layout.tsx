
"use client";
import { useRef } from "react";
import Navbar from "./_components/NavBar";
import { PlusSquare, X } from "lucide-react";
import { PostsProvider } from "../_context/PostsContext";




export default function Layout({
  children,
  createpostslot

}: Readonly<{
  children: React.ReactNode;
  createpostslot: React.ReactNode;

}>) {
  const ref = useRef<HTMLDivElement|null>(null);
  const refX = useRef<SVGSVGElement|null>(null);
  const refPlus = useRef<SVGSVGElement|null>(null);
  function handlehide() {
    if (ref.current != null && ref.current.style.display !== "none" &&
      refX.current != null && refX.current.style.display !== "none" &&
      refPlus.current != null && refPlus.current.style.display !== "block" 
    ) {
      ref.current.style.display = "none";
      refX.current.style.display = "none";
      refPlus.current.style.display = "block";
    }
    else if (ref.current != null && ref.current.style.display === "none" &&
      refX.current != null && refX.current.style.display === "none" &&
      refPlus.current != null && refPlus.current.style.display === "block" 
    ) 
    {
      ref.current.style.display = "block";
      refX.current.style.display = "block";
      refPlus.current.style.display = "none";
    }
  }

  return (
<PostsProvider>
    <div className={`bg-neutral-900  text-white container grid grid-cols-3 `}>
      <div className="col-span-3 row-span-1  w-full">
        <Navbar />
      </div>
  
          {/* <X className="w-6 h-6 sm:hidden block" onClick={handlehide} ref={refX}/>
          <PlusSquare className="w-6 h-6 hidden" onClick={handlehide} ref={refPlus}/> */}
        <div className="sm:col-span-1 col-span-3 sm:hidden block w-full" ref={ref}>
          {createpostslot}
        </div>
        <div className="sm:col-span-2 col-span-3 h-screen overflow-y-auto scrollable-container w-full rounded-xl">

          {children}
        </div>
        <div className="col-span-1 hidden sm:block w-full">

          {createpostslot}
        </div>
      


    </div>
    </PostsProvider>


  )
}