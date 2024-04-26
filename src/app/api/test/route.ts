import { signIn } from "@/auth"

export async function POST(req:Request){
 const res =   await signIn("credentials", {
        username: "rex",
        password : "hernandezzzzz"
    })
 
}