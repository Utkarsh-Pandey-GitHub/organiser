
import type { Metadata } from "next";
import {ChatSocketProvider} from "@/app/_context/ChatSocketProvider";



export const metadata: Metadata = {
    title: "Organiser",
    description: "one app for all your social media needs",
};

export default function Layout({
    children,

}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <ChatSocketProvider>
            {children}
        </ChatSocketProvider>
    )
}


