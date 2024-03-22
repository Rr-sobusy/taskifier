import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { columns, Payment } from './columns'

// react-icons
import { CiFilter } from "react-icons/ci";
import { DataTable } from './data-table';

type Props = {}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}
const Page = async(props: Props) => {
  const data = await getData();
  return (
    <LayoutMain>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <h1 className="scroll-m-20 text-slate-700 dark:text-slate-300 font-extrabold tracking-tight text-2xl lg:text-2xl">
            Task Lists
          </h1>
          <Button size="sm" className="rounded-3xl flex gap-2 border-primary h-8 text-primary hover:text-primary px-4 text-[.75rem]" variant="outline"><span><CiFilter /></span><span className="md:block md:rounded-full hidden">Filters</span></Button>
        </div>
        <Button size="sm" className="rounded-3xl flex gap-2 px-6 text-[.75rem]"><span><IoMdAdd size={20} /></span><span className="hidden md:block rounded-full">Add New</span></Button>
      </div>

      <div className="mt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </LayoutMain>
  )
}

export default Page