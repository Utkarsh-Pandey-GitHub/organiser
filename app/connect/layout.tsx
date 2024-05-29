import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";



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
    
      <div className={`${inter.className} bg-neutral-900  text-white`}>
        <NavBar />
        {children}        
      </div>
    
  );
}
