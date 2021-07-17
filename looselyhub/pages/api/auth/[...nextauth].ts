import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { LoginLog } from '../events/log'

const domain = process.env.DOMAIN;
const emailPort = process.env.EMAIL_PORT ? process.env.EMAIL_PORT : '465';
const emailHost = process.env.EMAIL_HOST ? process.env.EMAIL_HOST : 'smtp.gmail.com';
const emailUsername = process.env.EMAIL_USERNAME ? process.env.EMAIL_USERNAME : 'no-reply@looselyhub.com';
const emailPassword = process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD : 'i2UQXBwRNw35yeK';
const emailFrom = process.env.EMAIL_FROM ? process.env.EMAIL_FROM : 'LooselyHub <no-reply@looselyhub.com>';


const options = {
  site: domain,
  providers: [
    Providers.Email({
      server: {
        port: Number(emailPort),
        host: emailHost,
        auth: {
          user: emailUsername,
          pass: emailPassword,
        },
      },
      from: emailFrom,
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
