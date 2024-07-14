"use client"
import React from 'react'
import PostCard from './_components/PostCard'
import GhostCard from './_components/GhostCard'
import Navbar from './_components/NavBar';
import CreatePost from './_components/CreatePostForm';
import { TracingBeam } from '../_components/tracing-beam';
import Link from 'next/link';
import { ArrowBigUp, Ghost } from 'lucide-react';
import { usePosts } from '../_context/PostsContext';

const dummyPost = {
  id: 'RECORD_ID_1',
  title: 'Exciting Adventure in the Mountains',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ex varius, sodales odio eget, condimentum libero. Ut vel ultricies ipsum, vitae cursus velit. In hac habitasse platea dictumst. Duis et nisi sed est malesuada volutpat.',
  file: ['https://images.pexels.com/photos/89112/pexels-photo-89112.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/25542632/pexels-photo-25542632/free-photo-of-coffee-pot-and-coffee-cup-on-window-sill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
  link: 'https://images.pexels.com/photos/26329280/pexels-photo-26329280/free-photo-of-a-plate-with-a-piece-of-toast-and-figs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  author: 'John Doe',
  location: 'Mountain Peak, USA',
  tags: 'Adventure, Nature, Travel',
};
 
function page() {
  const {posts}=usePosts() as any;
  return (
    
      
  <div className='flex flex-col justify-center gap-2 w-full items-center overflow-auto'>

      <GhostCard  />
      <PostCard {...dummyPost} />
      {posts&&posts.map((post:any)=>{
        return(<PostCard {...post} />);
      })}
      </div>

    

  )
}

export default page
