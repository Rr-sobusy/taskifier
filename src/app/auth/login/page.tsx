import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { SignIn } from '@/components/auth-component'
import { auth } from '@/auth'

type Props = {}
const UserButton = async ()=>{
  const session = await auth();
  if (!session?.user) return <SignIn />
}

const LoginPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
        <div className="min-w-[400px] py-10 rounded-lg px-5 bg-secondary flex gap-3 flex-col justify-center">
             <h3 className="font-extrabold text-lg text-center">Login</h3>
             <label>UserName</label>
             <Input className="" type='text' />
             <label>Password</label>
             <Input className="" type='text' />
             <Button>Login</Button>
              <UserButton />
        </div>
    </div>
  )
}


export default LoginPage