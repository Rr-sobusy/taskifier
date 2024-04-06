import React from 'react'
import LayoutMain from '@/components/layout/nav-layout/Layout'
import Head from 'next/head'


type Props = {}

const layout = (props: Props) => {
  return (
    <>
    <Head>
      <title>
        Taskifier
      </title>
    </Head>
    <LayoutMain>
      <p>this is dashobard</p>
    </LayoutMain>
    </>
  )
}

export default layout