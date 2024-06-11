"use client"
import React, { useEffect, useState } from 'react'
import Task from './_components/Task'
import { Plus } from 'lucide-react'


type Task = {
  checked: boolean
  text: string
  date: Date | undefined

}

function page() {
  const [tasks,setTasks]=useState<Task[]>([{
    checked:false,
    text:'',
    date:new Date()
  }]);
  console.log(tasks)

  function addTask() {
    setTasks([...tasks, {
      checked: false,
      text: '',
      date: new Date()
    }])
    console.log("called")

  }
  useEffect(() => {
    return () => {
      //save tasks 
    }
  }, [])
  return (
    <div className='flex gap-1 m-4 flex-col justify-center items-center'>
      <div className='text-6xl text-gray-300 border-b border-gray-700 place-self-start w-full'>
        Tasks
      </div>
      
      <Plus onClick={addTask} className='active:text-slate-400 focus:text-slate-400'/>
      <div className='w-fit mt-16'>
        {tasks?.map((task,index)=>( 
          <Task key={index} task={task} tasks={tasks} setTasks={setTasks}/>
        ))}
      </div>
      
    </div>


  )
}

export default page
