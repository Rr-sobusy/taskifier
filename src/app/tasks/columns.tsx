"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge"
import clsx from "clsx";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  task_name: string
  task_type: string
  target_date: Date | string;
  progress: number
  status: "Not starting" | "In progress" | "Completed" | "Failed"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "task_name",
    header: "Task Name"
  },
  {
    accessorKey: "task_type",
    header: "Task Type",
    cell: ({ row }) => (<Badge className="text-slate-700 dark:text-slate-300" variant="outline">{row.getValue("task_type")}</Badge>)
  },
  {
    accessorKey: "target_date",
    header: "Target Date",
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => (<div className="flex items-center gap-4">
      <Progress className={`h-[.25rem]`} value={row.getValue("progress")} />
      <p>{row.getValue("progress") + "%"}</p>
    </div>)
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      
      const currentStatus = row.getValue("status")
      
      const badgeStyle = clsx({
        'bg-green-100 text-green-500 hover:bg-green-200 dark:bg-green-500 dark:text-green-200 dark:hover:bg-green-400' : currentStatus === "Completed",
        'bg-red-100 text-red-500 hover:bg-red-200 dark:bg-red-500 dark:text-red-200 dark:hover:bg-red-400' : currentStatus === "Failed",
        'bg-blue-100 text-blue-500 hover:bg-blue-200 dark:bg-blue-500 dark:text-blue-200 dark:hover:bg-blue-400' : currentStatus === "In progress",
        'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-500 dark:text-slate-200 dark:hover:bg-slate-400' : currentStatus === "Not starting"
      })

      return <Badge className={`${badgeStyle} cursor-pointer`}>{row.getValue("status")}</Badge>
    }
  }
]