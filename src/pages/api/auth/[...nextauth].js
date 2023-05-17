import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/login_check",
        {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
  session: { jwt: true },
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user}
    },
    async session({session, token, user} ) {
      session.user = token
      return session
    }
  },
  
}
export default NextAuth(authOptions)