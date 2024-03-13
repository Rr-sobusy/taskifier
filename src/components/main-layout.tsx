import React from 'react'
import { MdDashboard } from "react-icons/md";

const LayoutMain = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (

        <body className={`${className} flex flex-row`}>
            <aside className='max-w-[70px] min-h-screen bg-primary'>
                <h1>rex pogi</h1>
            </aside>
            <main>{children}</main>
        </body>

    )
}

export default LayoutMain