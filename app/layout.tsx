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
            <body className={`${inter.className} bg-neutral-900  text-white`}>

              <NavBar />
              {children}

              <BottomBar />


            </body>
          </html>
        </UsersProvider>
      </UserProvider>
    </ClerkProvider>
  );
}
