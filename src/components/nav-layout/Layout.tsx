"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import BreadcrumbsHelper from '../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { usePathname } from 'next/navigation';




const LayoutMain = ({ children }: { children: React.ReactNode }) => {
    const { theme, setTheme } = useTheme()
    const pathName = usePathname()
    const route = pathName.split("/").filter(path=>path)

    const ThemeToggler = theme === "light" ? MdOutlineDarkMode : MdLightMode;
    return (
        // <section className="flex flex-col w-screen md:w-[calc(100vw-70px)] md:px-8 px-3">
        //     <header className="h-[75px] items-center flex justify-between">
        //         <BreadcrumbsHelper route={route} />
        //         <div className="flex justify-center items-center gap-4">
        //             <ThemeToggler onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} size={22} className={`${theme === "light" ? 'text-slate-600' : 'text-slate-100'} cursor-pointer`} />
        //             <Avatar>
        //                 <AvatarImage src="/man.svg" />
        //                 <AvatarFallback></AvatarFallback>
        //             </Avatar>
        //         </div>
        //     </header>
        //     {children}
        // </section>
        <>
        
        </>
    )
}

export default LayoutMain