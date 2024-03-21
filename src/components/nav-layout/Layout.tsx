"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import BreadcrumbsHelper from '../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

import Image from 'next/image'


const LayoutMain = ({ children }: { children: React.ReactNode }) => {
    const { theme, setTheme } = useTheme()
    console.log(theme)

    const ThemeToggler = theme === "light" ? MdOutlineDarkMode : MdLightMode;
    return (
        <section className="flex flex-col w-screen md:w-[calc(100vw-70px)] md:px-5">
            <header className="h-[60px] items-center flex justify-between">
                <BreadcrumbsHelper />
                <div className="flex justify-center items-center gap-4">
                    <ThemeToggler onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} size={22} className={`${theme === "light" ? 'text-slate-600' : 'text-slate-100'} cursor-pointer`} />
                    <Avatar>
                        <AvatarImage src="/man.svg" />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                </div>
            </header>


            {children}
        </section>
    )
}

export default LayoutMain