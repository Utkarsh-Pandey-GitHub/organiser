"use client"
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import chat from "@/public/chat.png"
import note from "@/public/note.png"
import savings from "@/public/savings.png"
import schedule from "@/public/schedule.png"
import vidcall from "@/public/vidcall.png"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import Link from "next/link"

const data = [
    {
        goal: 400,
    },
    {
        goal: 480,
    },
    {
        goal: 200,
    },
    {
        goal: 480,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 480,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

export function TestDrawer() {
    
    return (
        <div className="bg-neutral-900 text-black">
            <Drawer >
                <DrawerTrigger asChild>
                    <div className="text-white active:text-blue-600">Productivity</div>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full  text-slate-600 ">
                        <DrawerHeader>
                            <DrawerTitle>Productivity</DrawerTitle>
                            <DrawerDescription>Choose any on these productivity options</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex justify-around ">
                            <div className="text-center ">
                                <Image src={chat} alt="chat" width={48} height={48} className="hover:shadow-md mx-auto" />
                                <div className="ubuntu">
                                    chat
                                </div>
                            </div>
                            <div className="text-center">
                                <Image src={note} alt="note" width={48} height={48} className="hover:shadow-md mx-auto" />
                                <div className="ubuntu">
                                    make notes
                                </div>
                            </div>
                            <div className="text-center">
                                <Image src={savings} alt="savings" width={48} height={48} className="hover:shadow-md mx-auto" />
                                <div className="ubuntu">
                                    saving goals
                                </div>
                            </div> 
                            <DrawerClose asChild>
                            <Link
                            href={"/schedules"}
                            className="text-center">
                                <Image src={schedule} alt="schedule" width={48} height={48} className="hover:shadow-md mx-auto" />
                                <div className="ubuntu ">
                                    schedule
                                </div>
                            </Link>
                            </DrawerClose>
                            <div className="text-center">
                                <Image src={vidcall} alt="vidcall" width={48} height={48} className="hover:shadow-md mx-auto" />
                                <div className="ubuntu">
                                    video chat
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto">


                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button>Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </div>

                </DrawerContent>
            </Drawer>
        </div>
    )
}