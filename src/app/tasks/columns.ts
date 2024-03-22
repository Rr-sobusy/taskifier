"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  task_name: string
  task_type: string
  target_date: Date | string;
  progress: number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "task_name",
    header: "Task Name",
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
  },
]