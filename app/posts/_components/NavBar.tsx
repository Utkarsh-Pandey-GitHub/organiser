"use client"
import React from 'react';
import Link from 'next/link';
import { Home, Edit, PlusCircle, User, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center p-4  text-white" id='topnavpost'>
      <div className="flex items-center space-x-4 text-white">
        <Link href="/posts" className={`flex items-center space-x-1 ${path.endsWith("/posts")&&"border-b border-white pb-1 border-opacity-55"}`}>
          <Home className="w-5 h-5" />
          <span className='hidden sm:block'>Posts</span>
        </Link>
        <Link href="/posts/my-posts" className={`flex items-center space-x-1 ${path.endsWith("posts/my-posts")&&"border-b border-white pb-1 border-opacity-55"}`}>
          <User className="w-5 h-5" />
          <span className='hidden sm:block'>My Posts</span>
        </Link>
        <Link href="/posts/group-posts" className={`flex items-center space-x-1 ${path.endsWith("posts/group-posts")&&"border-b border-white pb-1 border-opacity-55"}`}>
          <Users className="w-5 h-5" />
          <span className='hidden sm:block'>Group Posts</span>
        </Link>
      </div>
      <div>
        <Link href="/create-post" className="flex items-center space-x-1">
          <PlusCircle className="w-5 h-5" />
          <span className='hidden sm:block'>Create Post</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
