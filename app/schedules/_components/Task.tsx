"use client"
import { DatePickerDemo } from '@/app/_components/DatePicker'
import { Grip, Image, Plus } from 'lucide-react'
import React, { useState } from 'react'

function Task() {
    const [checked, setChecked] = useState(false)
    const [text, setText] = useState('')

  return (
    <div className='flex text-white rounded-lg  w-fit gap-1 place-items-center group'>
      <Plus  size={16}/>
      <Grip size={16}/>
      <input type="text" className={`text-inherit ml-2   rounded-lg  bg-white bg-opacity-30 px-2 min-w-sm min-w-80 ${checked&&text&&'line-through'}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'So the task is...'}
      />
      <div className=''>

      <DatePickerDemo/>
      </div>
      <input type="checkbox" className='mx-1' 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="border border-rose-500 rounded-full px-4 text-sm text-rose-500 py-0.5">Due</span>


    </div>
  )
}

export default Task
