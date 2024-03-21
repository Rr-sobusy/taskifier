import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';

type Props = {}

const Page = (props: Props) => {
  return (
    <LayoutMain>
      <div className="flex justify-between">
        <h1 className="scroll-m-20 text-xl text-slate-800 font-bold tracking-tight lg:text-2xl">
          Task Lists
        </h1>
        <Input className="w-[14rem] rounded-xl" />
        <Button size="sm" className="rounded-3xl border-indigo-500 px-3 text-[.75rem] text-indigo-500" variant="outline">Filters</Button>
        <Button size="sm" className="bg-indigo-500 rounded-3xl flex gap-2 px-3 text-[.75rem]"><span><IoMdAdd /></span>Add New</Button>
      </div>

    </LayoutMain>
  )
}

export default Page