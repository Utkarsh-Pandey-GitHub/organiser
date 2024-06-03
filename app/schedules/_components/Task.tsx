"use client"
import { DatePickerDemo } from '@/app/_components/DatePicker'
import { PlaceholdersAndVanishInput } from '@/app/_components/placeholders-and-vanish-input'
import { set } from 'date-fns'
import { Book, Eraser, Grip, Image, LinkIcon, Plus, SquareX } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'

type TaskProps = {
  task: any,
  tasks: any[],
  setTasks: any,
}

function Task({ task, tasks, setTasks }: TaskProps) {
  const [erase, setErase] = useState(false)

  function addTask() {
    setTasks([...tasks, {
      checked: false,
      text: '',
      date: new Date()
    }])
    console.log("called")

  }
  function changeDate(date: Date) {
    setTasks(
      tasks.reduce((acc, curr) => {
        if (curr == task) {
          acc.push({ ...curr, date })
        } else {
          acc.push(curr)
        }
        return acc
      }, []
      ))
  }
  function changeText(text: string) {
    setErase(false)
    setTasks(
      tasks.reduce((acc: any[], curr: any) => {
        if (curr == task) {
          acc.push({ ...curr, text })
        } else {
          acc.push(curr)
        }
        return acc
      }, []
      ))
  }
  function changeChecked(checked: boolean) {
    setTasks(
      tasks.reduce((acc, curr) => {
        if (curr == task) {
          acc.push({ ...curr, checked })
        } else {
          acc.push(curr)
        }
        return acc
      }, []
      ))
  }
  function deleteTask() {
    // changeChecked(true)
    setTimeout(() => {
      setTasks((prev: any) => tasks.filter((t) => t != task))
    }, 500);
  }



  return (
    <div className='flex text-white rounded-lg  w-fit gap-1 place-items-center group my-1'>


      <Plus size={32} onClick={addTask} className='group-hover:visible invisible ' />
      <Grip size={32} className='group-hover:visible invisible  ' />

      {/* <input type="text" className={`text-inherit ml-2   rounded-lg  bg-white bg-opacity-30 px-2 min-w-sm min-w-80 ${checked&&text&&'line-through'}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'So the task is...'}
      /> */}
      <PlaceholdersAndVanishInput
        value={task.text}
        setValue={changeText}
        placeholders={['']}
        trigger={erase}
        lineStrike={task.checked}
      />
      <div className=''>

        <DatePickerDemo date={task.date} setDate={changeDate as any} />
      </div>
      <Eraser size={32} className='group-hover:visible invisible active:text-rose-500 '
        onClick={(e) => setErase(true)}
      />
      <label htmlFor="image" className='flex '>

        <Image size={16} className='group-hover:visible invisible 
      active:text-amber-500 h-auto w-auto
      ' />
      </label>
      <input type="file" name="image" id="image" className='hidden' />

      <LinkIcon size={32} className='group-hover:visible invisible active:text-indigo-700' />
      <input type="checkbox" className='mx-1'
        checked={task.checked}
        onChange={(e) => changeChecked(e.target.checked)}
      />
      <SquareX onClick={deleteTask} size={32} />

      {(!task.checked && task.date && task.date <= (new Date)) &&
        <span className="border border-rose-500 rounded-full px-4 text-sm text-rose-500 py-0.5">Due</span>}


    </div>
  )
}

export default Task
