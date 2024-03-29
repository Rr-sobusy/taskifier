import React from 'react'
import LayoutMain from '@/components/nav-layout/Layout'
import { IoMdAdd } from "react-icons/io";
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { columns, Payment } from './columns'

// react-icons
import { CiFilter } from "react-icons/ci";
import { DataTable } from './data-table';

type Props = {}

async function getData(): Promise<Payment[]> {
  const data = await fetch('http://localhost:3000/tasks/api').then(res => res.json());
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
          <Button size="sm" className="rounded-3xl flex gap-2 border-primary h-8 text-primary hover:text-primary px-4 text-[.75rem]" variant="outline"><span><CiFilter /></span><span className="md:block md:rounded-full hidden">Filters</span></Button>

        </div>
        <Link href="/tasks/add-new">
          <Button size="sm" className="rounded-3xl flex gap-1 h-8 px-4 text-[.75rem]"><span><IoMdAdd size={20} /></span><span className="hidden md:block rounded-full">Add New</span></Button>
        </Link>
      </div>

      <div className="mt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </LayoutMain>
  )
}

export default Page 