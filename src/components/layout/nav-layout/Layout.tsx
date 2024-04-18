"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import BreadcrumbsHelper from '../../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation';

import Drawer from '@/components/ui helpers/side-drawer/Drawer';

import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";




const LayoutMain = ({ children }: { children: React.ReactNode }) => {

    const { theme, setTheme } = useTheme()
    const pathName = usePathname()
    const route = pathName.split("/").filter(path => path)

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <section className="flex flex-col w-screen md:w-[calc(100vw-70px)] md:relative left-[58px] md:px-8 px-3 md:min-h-[calc(100vh+10px)]">
            <header className="h-[75px] items-center flex justify-between"> 
                <BreadcrumbsHelper route={route} />
                <div className="flex justify-center items-center gap-4">
                    <Drawer>
                        <RxHamburgerMenu className="block md:hidden" size={20} /> </Drawer>
                    <span className="cursor-pointer" onClick={changeTheme}>{theme === "dark" ? <MdLightMode size={22} /> : <MdOutlineDarkMode size={22} />}</span>
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