import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Facebook, Twitter, Linkedin, Link, Share } from 'lucide-react'  
import LinkPopover from './LinkPopover'

function SharePanel() {
  return (
    <div>
      <div className='flex items-center'>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2 text-gray-500">
            <Share className="w-5 h-5 mr-1" />
            <div className='hidden sm:block'>
              Share
            </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white shadow-lg rounded-lg p-3 flex gap-2 w-fit">
            <Facebook className="w-6 h-6 text-blue-600" />
            <Twitter className="w-6 h-6 text-blue-400" />
            <Linkedin className="w-6 h-6 text-blue-800" />
            
            <LinkPopover/>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default SharePanel
