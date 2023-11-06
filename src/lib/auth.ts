import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
import { compare } from "bcrypt";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_URL,
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "ksawery@mail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials.password){
                return null
            }

            const existingUser = await prisma.user.findUnique({where: {email: credentials?.email}})
            if(!existingUser){
                return null
            }

            const passwordMatch = await compare(credentials.password, existingUser.password)
            if(!passwordMatch){
                return null
            }

            return {
                id: existingUser.id.toString(),
                username: existingUser.username,
                email: existingUser.email
            }
          }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user){
                return {
                    ...token,
                    username: user.username
                }
            }
          return token
        },
        async session({ session, user, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
            }
        },
    }
}
