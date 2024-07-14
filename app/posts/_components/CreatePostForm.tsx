"use client"


import React, { useState } from 'react';
import { FileText, Link2, MapPin, PenTool, Tag, User } from 'lucide-react';
import { usePosts } from '@/app/_context/PostsContext';

interface PostData {
  title: string;
  description: string;
  file: any[] | null;
  link: string;
  author: string;
  location: string;
  tags: string;
}

const CreatePost: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    description: '',
    file: null,
    link: '',
    author: '',
    location: '',
    tags: '',
  });

  const {setPosts} = usePosts() as any; 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e.target.files as FileList;
    if (e.target.files) {
      setPostData({
        ...postData,
        file: files ? Array.from(files) : null,
      });
    }
    console.log(postData.file)
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation logic here
    setPosts((prevPosts: any) => {
      return [
        ...prevPosts,
        {
          ...postData,
          id: Math.random().toString(36).substr(2, 9),
          file: postData.file ? postData.file.map((file: any) => URL.createObjectURL(file)) : null,
        },
      ];
    }
    );
    console.log('Post Created:', postData);
  };

  return (
    <div className="p-4 ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="flex items-center text-sm font-medium text-gray-300">
            <PenTool className="w-4 h-4 mr-1" />
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40 "
          />
        </div>
        <div>
          <label htmlFor="description" className="flex items-center text-sm font-medium text-gray-300">
            <FileText className="w-4 h-4 mr-1" />
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={postData.description}
            rows={5}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40"
          />
        </div>
        <div>
          <label htmlFor="file" className="flex items-center text-sm font-medium text-gray-300">
            <FileText className="w-4 h-4 mr-1" />
            Images
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40"
            accept="image/*"
            multiple
          />
        </div>
        <div className='overflow-y-scroll max-h-72 '>

          {
            postData.file && postData?.file?.map((file: any, index: any) => {
              return (
                <img key={index} src={URL.createObjectURL(file)} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
              )
            })
          }
        </div>
        <div>
          <label htmlFor="link" className="flex items-center text-sm font-medium text-gray-300">
            <Link2 className="w-4 h-4 mr-1" />
            Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={postData.link}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40"

          />
        </div>

        <div>
          <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-300">
            <MapPin className="w-4 h-4 mr-1" />
            Location
          </label>
          <input
            type="url"
            id="location"
            name="location"
            value={postData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40"
          />
        </div>
        <div>
          <label htmlFor="tags" className="flex items-center text-sm font-medium text-gray-300">
            <Tag className="w-4 h-4 mr-1" />
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={postData.tags}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white  bg-opacity-40"
          />
        </div>
        <div className='flex justify-evenly'>

          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Create Post
          </button>
          <button type="reset" className="px-4 py-2 bg-blue-600 text-white rounded">
            Reset
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreatePost;
