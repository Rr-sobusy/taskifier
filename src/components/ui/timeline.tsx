import React from 'react'

type Props = {}

const Timeline = (props: Props) => {
    return (
        <div className="wrapper flex items-center">
            <ul>
                <li className="relative">
                    <div className="absolute h-5 w-5 rounded-full bg-blue-200"></div>
                    <div className="h-[50px] before:absolute before:content-[''] before:w-1 before:bg-blue-200 before:h-full before:left-0">
                        <p>This is rex</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}



export default Timeline