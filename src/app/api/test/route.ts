import { signIn, signOut } from "@/auth"

export async function POST(req:Request){
//     const request = await req.json();
//  const res =   await signIn("credentials", {
//         name: request.name,
//         password : "hernandezzzzz",
//         auth : "sample123"
//     })
// console.log(JSON.stringify({res}))
await signOut();

}