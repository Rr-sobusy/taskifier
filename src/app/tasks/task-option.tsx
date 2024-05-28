import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Eye, Delete } from 'lucide-react'


type TaskOptionTypes = {
    children : React.ReactNode
}

const TaskOption = ({children}:TaskOptionTypes) => {
  return (
    <Popover>
    <PopoverTrigger asChild>
      {children}
    </PopoverTrigger>
        <PopoverContent className="w-[9rem] absolute right-0">
            <h5 className="text-sm">Action</h5>
            <div className="mt-2 flex flex-col gap-1">
                <h6 className="px-2 py-1 text-sm flex cursor-pointer items-center gap-2 font-semibold border rounded-md"><span className="text-green-300"><Eye size={19} /></span> View</h6>
                <h6 className="px-2 py-1 text-sm flex cursor-pointer items-center gap-2 font-semibold border rounded-md"><span className="text-red-300"><Delete size={19} /></span> Remove</h6>
            </div>
        </PopoverContent>
  </Popover>
  )
}

export default TaskOption