import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


type TaskOptionTypes = {
    children : React.ReactNode
}

const TaskOption = ({children}:TaskOptionTypes) => {
  return (
    <Popover>
    <PopoverTrigger asChild>
      {children}
    </PopoverTrigger>
        <PopoverContent>
            rex
        </PopoverContent>
  </Popover>
  )
}

export default TaskOption