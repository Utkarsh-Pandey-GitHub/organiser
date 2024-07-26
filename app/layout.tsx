
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./_components/NavBar";
import BottomBar from "./_components/BottomBar";
import { BackgroundBeams } from "./_components/background-beams";
import { ClerkProvider } from "@clerk/nextjs";
import { UserProvider } from "./_context/UserProvider";
import UsersProvider from "./_context/UsersProvider";
import { Toaster } from "@/components/ui/sonner"

        
   




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organiser",
  description: "one app for all your social media needs",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <ClerkProvider>

      <UserProvider>
        <UsersProvider>
          <html lang="en">
            <body className={`${inter.className} bg-neutral-900 object-cover bg-cover text-white`}
            // style={{backgroundImage: "url('https://images.pexels.com/photos/163811/street-art-shipping-container-freight-highway-163811.jpeg?auto=compress&cs=tinysrgb&w=600')"}}
            >
              

              <NavBar />
              {children}
              <Toaster />
              

              <BottomBar />

              
            </body>
          </html>
        </UsersProvider>
      </UserProvider>
    </ClerkProvider>
  );
}
