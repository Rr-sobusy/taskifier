import React from 'react'
import LayoutMain from '@/components/layout/nav-layout/Layout'
import Head from 'next/head'
import { auth } from '@/auth'


type Props = {}

const layout = async(props: Props) => {
  const session = await auth();
  console.log(JSON.stringify(session))
  return (
    <>
    <Head>
      <title>
        Taskifier
      </title>
    </Head>
    <LayoutMain>
      <p>{session?.user?.id}</p>
    </LayoutMain>
    </>
  )
}

export default layout