"use client"
import Image from "next/image";
import { BackgroundBeams } from "./_components/background-beams";
import { GlowingStarsBackgroundCard } from "./_components/glowing-stars";
import { TracingBeam } from "./_components/tracing-beam";
import { Meteors } from "@/components/ui/meteors";
import { FlipWords } from "@/components/ui/flip-words";
import { useUser } from "@clerk/nextjs";
import { use, useEffect } from "react";
import dep from "@/dependency-graph.svg"


export default function Home() {
  const words = ["tasks", "notes", "connections", "ideas"];
  const colorClasses = ["text-rose-500 italic", "text-amber-500 italic", "text-emerald-500 italic", "text-indigo-500 italic"];


  return (

    <div className="m-5">
      <div className=" relative z-10   text-md  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold container text-2xl sm:text-4xl md:text-6xl lg:text-9xl ">


          Organize 
        <div className="flex p-4">
          your
          <FlipWords words={words} duration={3000} classNames={colorClasses} />


        </div>
      </div>
      <div className="m-16 mt-5 sm:text-lg md:text-2xl lg:text-4xl w-3/4 flex">
        with this organizer app you can
        share thoughts, ideas, make goals with your team. you can also share files, images, videos,  and more.
      </div>
      
    </div>

  );
}
