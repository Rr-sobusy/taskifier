"use client"

import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'

import Timeline from '@/components/ui/timeline'

type Props = {}

const Page = (props: Props) => {
  return (
    <LayoutMain>
      <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
        New Task
      </h1>

      <div className="h-24">
        <Timeline />
      </div>
      <div className="h-24">
        <Timeline />
      </div>
    </LayoutMain>
  )
}

export default Page