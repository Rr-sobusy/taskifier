import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {

  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // Credentials({
    //   credentials: {
    //     name: {},
    //     password: {},
    //     auth: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = { id: "", name: "", auth: "", email: "" };
    //     user = {
    //       id: "",
    //       name: await credentials.name as string,
    //       auth: "sample123",
    //       email: "arwarwara@yahoo.com",
    //     };
    //     return user;
    //   },
    // }),

    Google
  ],
});
