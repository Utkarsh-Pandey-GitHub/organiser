"use client"

import React, { useState } from 'react';
import { Bookmark, FileText, Link2, MapPin, MessageCircle, Share, ThumbsUp, User } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CommentList from './comments/CommentList';
import SharePanel from './share/Sharepanel';


interface PostData {
  title: string;
  description: string;
  file: string[]; // Assuming array of filenames for simplicity
  link: string;
  author: string;
  location: string;
  tags: string;
}

const PostCard: React.FC<PostData> = ({ title, description, file, link, author, location, tags }) => {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = useState(false);
  function handleLike() {
    setLiked(prev => !liked);
  }
  function handleSave() {
    setSaved(prev => !saved);
  }
  let idx = 1;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:overflow-visible  w-full sm:w-2/3 bg-opacity-95 ">

      {/* Post Image or Thumbnail */}
      {file.length > 1 ?
        <Carousel className='group'>
          <CarouselContent className='text-white '>
            {(file?.map((f, index) => {
              idx = index + 1;
              return (
                <CarouselItem key={index} className='text-red-400'>
                  <img src={`${f}`} alt={title} className="w-full h-48 object-cover" />

                </CarouselItem>)
            }
            ))}
            <div >{idx}</div>
          </CarouselContent>
          <CarouselPrevious className='bg-transparent group-hover:visible invisible absolute left-0 text-white font-extrabold' />
          <CarouselNext className='bg-transparent group-hover:visible invisible absolute right-0 font-extrabold' />
        </Carousel> :
        <img src={`${file}`} alt={title} className="w-full h-48 object-cover" />}


      {/* Post Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Author and Location */}
        <div className="flex items-center text-gray-500 mb-2 ">
          <User className="w-4 h-4 mr-1 text-black " />
          <span className='hover:text-blue-600'>{author}</span>
          {location && (
            <>
              <MapPin className="w-4 h-4 ml-2 mr-1 text-black " />
              <span>{location}</span>
            </>
          )}
        </div>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap">
            {tags.split(',').map((tag, index) => (
              <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-600 text-sm rounded-md">
                {tag.trim()}
              </span>
            ))}
          </div>
        )}



        {/* Link */}
        {link && (
          <div className="mt-2 flex items-center">
            <Link2 className="w-4 h-4 mr-1 text-blue-600" />
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Read more
            </a>
          </div>
        )}
        {/*like comment and share */}
        <div className="flex items-center mt-4 justify-evenly">
          <button className="flex items-center text-gray-500 focus:outline-none ">
            <ThumbsUp
              className="w-5 h-5 mr-1 "
              onClick={handleLike}
              fill={liked ? 'blue' : 'none'}
              stroke={liked ? 'blue' : 'currentColor'}
            />
            <div className='hidden sm:block' onClick={handleLike}>
              Like
            </div>
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <MessageCircle className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>

              Comment
            </div>
          </button>
          <div className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <SharePanel />
          </div>
          <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <Bookmark className="w-5 h-5 mr-1"
              onClick={handleSave}
              fill={saved ? 'lime' : 'none'}
              stroke={saved ? 'blue' : 'currentColor'}
            />
            <div className='hidden sm:block'
              onClick={handleSave}
            >
              Save
            </div>
          </button>
        </div>
      </div>
      <CommentList />

    </div>
  );
};

export default PostCard;
