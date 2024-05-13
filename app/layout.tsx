import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./_components/NavBar";
import BottomBar from "./_components/BottomBar";
import { BackgroundBeams } from "./_components/background-beams";
import { TracingBeam } from "./_components/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patio",
  description: "one app for all your social media needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"/>
      </Head>
      <body className={`${inter.className} bg-neutral-900  text-white`}>
        <TracingBeam>
        <NavBar />
        {children}
        <BottomBar />
        </TracingBeam>
        
      </body>
    </html>
  );
}
