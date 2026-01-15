import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                userType: { label: "User Type", type: "text" }
            },
            async authorize(credentials) {
                const { email, password, userType } = credentials || {};

                // MASTERADMIN BYPASS: Temporary update for faster navigation


                if (!credentials?.email || !credentials?.password) return null;
                let user = null;
                let role = "user";

                try {
                    if (!userType || userType === 'employee') {
                        const u = await prisma.user.findUnique({ where: { email } });
                        if (u) { user = u; role = "admin"; }
                    }
                    else if (userType === 'candidate') {
                        const c = await prisma.candidate.findUnique({ where: { email } });
                        if (c) {
                            user = { ...c, role: 'candidate' };
                            role = 'candidate';
                        }
                    }
                    else if (userType === 'client') {
                        const c = await prisma.client.findUnique({ where: { email } });
                        if (c) {
                            user = { ...c, role: 'client' };
                            role = 'client';
                        }
                    }

                    if (!user || !user.password || typeof password !== 'string') return null;

                    const isValid = await bcrypt.compare(password, user.password);

                    if (isValid) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: role
                        };
                    }
                    return null;
                } catch (e) {
                    console.error("Auth error:", e);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                // @ts-ignore
                session.user.id = token.sub;
                // @ts-ignore
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                // @ts-ignore
                token.role = user.role;
            }
            return token;
        }
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt",
        maxAge: 300, // 5 minutes
    },
    secret: process.env.NEXTAUTH_SECRET || "development-secret-do-not-use-in-prod",
    debug: true,
};
