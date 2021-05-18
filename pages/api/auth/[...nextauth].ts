import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { LoginLog } from '../events/log'

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      if (!profile.verificationRequest) {
        LoginLog(user.id)
      }
      return true
    },
    jwt: async (token, user) => {
      user && (token.user = user)
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.user = user.user
      return Promise.resolve(session)
    },
  },
  pages: {
    signIn: '/',
    newUser: null,
  },
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)
