import { signIn, signOut } from "@/auth"

export async function POST(req:Request){
//  const res =   await signIn("credentials", {
//         username: "rexpogi299",
//         password : "hernandezzzzz",
//         auth : "sample123"
//     })
// console.log(JSON.stringify({res}))
await signOut();
}