import React from 'react'
import LayoutMain from '@/components/layout/nav-layout/Layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { columns, Payment } from './columns'
import TaskCard from './tasks-card';

import AddTask from './add-task-dialog';

// react-icons
import { ListFilter, Plus } from 'lucide-react';
import { DataTable } from './data-table';

type Props = {}

async function getData(): Promise<Payment[]> {
  const data = await fetch(`${process.env.API_URL}/tasks/api`).then(res => res.json());
  return data;
}
const Page = async (props: Props) => {
  const data = await getData();
  return (
    <LayoutMain>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
            Task Lists
          </h1>
          <Button size="sm" className="rounded-3xl flex gap-2 border-primary h-8 text-primary hover:text-primary px-4 text-[.75rem]" variant="outline"><span><ListFilter size={20} /></span><span className="md:block md:rounded-full hidden">Filters</span></Button>

        </div>

        <AddTask>
          <Button size="sm" className="rounded-3xl flex gap-1 h-8 px-4 text-[.75rem]"><span><Plus size={20} /></span><span className="hidden md:block rounded-full">Add New</span></Button>
        </AddTask>
      </div>
      {/* <div className="mt-5">
        <DataTable columns={columns} data={data} />
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </LayoutMain>
  )
}

export default Page 