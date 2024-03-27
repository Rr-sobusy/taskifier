"use client"

import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'

import { usePathname } from 'next/navigation'

type Props = {}

const Page = (props: Props) => {
  return (
    <LayoutMain>
      <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
        New Task
      </h1>

      <div className="flex flex-row md:flex-col">

            <div className="border-l relative after:content-[''] after:block after:w-[10px] after:h-[10px] after:absolute after:rounded-full after:top-2">rex</div>
            <div className="border-l">randy</div>
                
      </div>
    </LayoutMain>
  )
}

export default Page