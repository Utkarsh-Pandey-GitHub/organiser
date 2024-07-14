"use client"

import React from 'react';
import { Bookmark, FileText, Link2, MapPin, MessageCircle, Share, ThumbsUp, User } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden   w-full sm:w-2/3 bg-opacity-95 ">

      {/* Post Image or Thumbnail */}
      <Carousel className=''>
        <CarouselContent className='text-white'>

          {file.length > 0 && (file.map((f, index) => {

            return (
              <CarouselItem key={index}>
                <img src={`${f}`} alt={title} className="w-full h-48 object-cover" />
              </CarouselItem>)
          }
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


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
          <button className="flex items-center text-gray-500 hover:text-blue-600 focus:outline-none ">
            <ThumbsUp className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>
              Like
            </div>
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <MessageCircle className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>

              Comment
            </div>
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <Share className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>
              Share
            </div>
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
            <Bookmark className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>
              Save
            </div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default PostCard;
