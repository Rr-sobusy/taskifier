"use client"

import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'
import UpcomingTask from './upcoming-task'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


type Props = {}

const Page = (props: Props) => {
  return (
    <LayoutMain>
      <div className="flex gap-3">
        <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
          New Task
        </h1>
        <Button size="sm" className="text-slate-700" variant="outline">Back</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
          <div className="md:basis-3/4 py-10">
              <form className="flex flex-row gap-3" action="">
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="scroll-m-20 font-extrabold text-sm text-slate-700">Task Title</p>
                    <Input type="text" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="scroll-m-20 font-extrabold text-sm text-slate-700">Task Title</p>
                    <Input type="text" />
                  </div>
              </form>
          </div>
          <div>
          <UpcomingTask className="md:basis-1/3" />
          </div>
      </div>
    </LayoutMain>
  )
}

export default Page