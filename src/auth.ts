import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        user: {},
        password: {},
        auth: {},
      },
      authorize: async (credentials) => {
        let user = { id: "", name: "", auth: "", email: "" };
        user = {
          id: "1",
          name:"rex randy",
          auth: "sample123",
          email: "arwarwara@yahoo.com",
        };

        return user;
      },
    }),
  ],
});
