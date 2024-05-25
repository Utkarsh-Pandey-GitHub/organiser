"use client"
import React, { useState } from 'react'
import Task from './_components/Task'

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
  return (
    <div className='flex gap-1 m-4 flex-col'>
      <div className='flex gap-2'>
        

      </div>
      Task
      Projects
      Group
      <div>
        {tasks?.map((task,index)=>( 
          <Task key={index} task={task} tasks={tasks} setTasks={setTasks}/>
        ))}
      </div>
      
    </div>


  )
}

export default page
