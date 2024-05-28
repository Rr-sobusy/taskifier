import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from '@/auth'
import Link from 'next/link'

type Props = {}

const CredentialsLogin = (props: Props) => {

  const formAction = async () => {
    "use server"
    await signIn("credentials", {
      redirectTo: "/dashboard"
    })
  }

  return (
    <form className="flex flex-col gap-7" action={formAction}>
      <div className='flex flex-col items-center'>
        <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl'>Task<span className='text-primary tracking-wide'>ifier</span></h2>
        <h6 className='font-sans text-gray-600 font-semibold tracking-wider text-[.8rem]'>Delivering the tasks smooth as slick!</h6>
      </div>

      {/* Input fields */}
      <div className='flex flex-col md:gap-3 gap-4 mt-9 md:mt-0'>
        <div className='flex flex-col gap-1'>
          <label className='text-slate-700 md:text-sm text-xl font-semibold tracking-tight scroll-m-20'>Username</label>
          <Input name='name' className='text-xsm text-slate-700' placeholder='Enter your username or email' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-slate-700 md:text-sm text-xl font-semibold tracking-tight scroll-m-20'>Password</label>
          <Input name='password' className='text-xsm text-slate-700' placeholder='Enter your password' />
        </div>

      </div>
      <div className='flex items-center flex-col gap-3'>
        <Button type='submit' className='w-full'>Login</Button>
        <Link className="w-full" href="/auth/register"> <Button variant="outline" type='submit' className='w-full'>Register</Button></Link>
      </div>
    </form>
  )
}

export default CredentialsLogin