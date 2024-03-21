import React from 'react'
import { RxDashboard } from "react-icons/rx";

const SideNav = () => {
    return (
        <aside className="w-[75px] hidden md:block border-r min-h-screen bg-background">
            <div className="flex flex-col gap-1 justify-center items-center">
                <ul className="mt-14">
                    <li className="w-10 h-10 flex justify-center items-center rounded-full text-indigo-700 hover:bg-slate-100"><RxDashboard size={19} /></li>
                </ul>
                <ul>
                    <li className="w-10 h-10 flex justify-center items-center rounded-full text-indigo-700 hover:bg-slate-100"><RxDashboard size={19} /></li>
                </ul>
                <ul>
                    <li className="w-10 h-10 flex justify-center items-center rounded-full text-indigo-700 hover:bg-slate-100"><RxDashboard size={19} /></li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNav