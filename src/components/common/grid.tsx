import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const gridVariants = cva("flex flex-wrap w-full h-full", {
    variants : {
         sm : {
            3 : "w-1/4",
            4 : "w"
         }
    }
})



type Props = {}

const Grid = (props: Props) => {
    return (
        <div>Grid</div>
    )
}

export default Grid