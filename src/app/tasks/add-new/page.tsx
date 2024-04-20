
import React from 'react'
import LayoutMain from '@/components/layout/nav-layout/Layout'
import TaskForm from './task-form'
import UpcomingTask from './upcoming-task'


type Props = {}

const Page = (props: Props) => {
 
  return (
    <LayoutMain>
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
          New Task
        </h1>
        <h5 className="font-normal text-slate-500 text-sm">Creating new task is fun. Lorem ipsum dolor amet.</h5>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">

          <TaskForm className='flex flex-col md:flex-row gap-3 md:basis-3/4 lg:basis-2/3' />
          <UpcomingTask className="md:basis-1/4 lg:basis-1/3" />

      </div>
    </LayoutMain>
  )
}

export default Page