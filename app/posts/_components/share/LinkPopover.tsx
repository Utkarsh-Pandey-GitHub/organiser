import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Link, Link2 } from 'lucide-react'

function LinkPopover() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <button className="flex items-center gap-2 text-gray-500">
            
            <Link className="w-6 h-6 text-gray-600" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-white shadow-lg rounded-lg p-1 flex gap-2 w-fit">
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" value="https://www.example.com" />
          <button className="bg-blue-500 text-white px-1.5 py-0.5 rounded-md">copy</button>
        </PopoverContent>
        </Popover>
    </div>
  )
}

export default LinkPopover
