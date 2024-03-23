"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  task_name: string
  task_type: string
  target_date: Date | string;
  progress: number
  status: "Not starting" | "In progress" | "Completed" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "task_name",
    header: "Task Name",
    cell: ({ row }) => (<p className="text-red-500">{row.getValue("task_name")}</p>)
  },
  {
    accessorKey: "task_type",
    header: "Task Type",
  },
  {
    accessorKey: "target_date",
    header: "Target Date",
  },
  {
    accessorKey: "progress",
    header: "progress",
    cell : ({row})=>(<div className="flex items-center gap-4">
      <Progress className="h-[.350rem]" value={row.getValue("progress")} />
      <p>{row.getValue("progress")}</p>
    </div>)
  },
  {
    accessorKey : "status",
    header : "Status",
    cell : ({row})=>(<p className="border">{row.getValue("status")}</p>)
  }
]