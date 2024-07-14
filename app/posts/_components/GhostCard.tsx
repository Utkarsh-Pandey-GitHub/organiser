"use client"

import React from 'react';
import { Bookmark, FileText, Ghost, Link2, MapPin, MessageCircle, Share, ThumbsUp, User } from 'lucide-react';


const GhostCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden   w-full sm:w-2/3 bg-opacity-95  ">

            {/* Post Image or Thumbnail */}

            <div className='animate-pulse bg-gray-500  w-full h-48 '>
                .
            </div>

            {/* Post Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-black bg-gray-500 w-2/3 h-6 rounded-md animate-pulse "></h2>
                <p className="text-gray-700 mb-4 bg-gray-500 w-full h-32 rounded-md animate-pulse"></p>

                {/* Author and Location */}
                <div className="flex items-center text-gray-500 mb-2 ">

                    <h2 className="text-xl font-bold mb-2 text-black bg-gray-500 w-2/3 h-6 rounded-md animate-pulse "></h2>

                </div>

                {/* Tags */}

                <div className="flex flex-wrap w-2/3 gap-1">




                    <h2 className="text-xl font-bold mb-2 text-black bg-gray-500 w-1/3 h-6 rounded-md animate-pulse "></h2>
                    <h2 className="text-xl font-bold mb-2 text-black bg-gray-500 w-1/3 h-6 rounded-md animate-pulse "></h2>
                    <h2 className="text-xl font-bold mb-2 text-black bg-gray-500 w-1/3 h-6 rounded-md animate-pulse "></h2>
                </div>


                {/*like comment and share */}
                <div className="flex items-center mt-4 justify-evenly">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 focus:outline-none">
                        <ThumbsUp className="w-5 h-5 mr-1" />
                        Like
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        Comment
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
                        <Share className="w-5 h-5 mr-1" />
                        Share
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 ml-4 focus:outline-none">
                        <Bookmark className="w-5 h-5 mr-1" />
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default GhostCard;
