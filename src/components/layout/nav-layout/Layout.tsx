import React from 'react'
import Header from '../header';
import { SideNav } from '../sidenav';

const LayoutMain = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <SideNav />
            <section className="flex flex-col z-10 w-screen md:w-[calc(100vw-70px)] md:relative left-[58px] md:px-8 px-3 md:min-h-[calc(100vh+10px)]">
                <Header />
                {children}
            </section>
        </>

    )
}

export default LayoutMain