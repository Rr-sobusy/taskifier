"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import BreadcrumbsHelper from '../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

import Image from 'next/image'


const LayoutMain = ({ children }: { children: React.ReactNode }) => {
    const { theme, setTheme } = useTheme()

    const ThemeToggler = theme === "light" ? MdOutlineDarkMode : MdLightMode;
    return (
        <section className="flex flex-col w-screen md:w-[calc(100vw-70px)] md:px-5">
            <header className="h-[60px] items-center flex justify-between">
                <BreadcrumbsHelper />
                <div className="flex justify-center items-center gap-4">
                    <ThemeToggler onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} size={22} className={`${theme === "light" ? 'text-foreground' : 'text-slate-100'} cursor-pointer`} />
                    <Image height={30} width={30} alt="" src="/man.svg" />
                </div>
            </header>


            {children}
        </section>
    )
}

export default LayoutMain