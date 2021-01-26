import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import bcrypt from 'bcrypt'
import Mongo from '../Mongo'

// TUTORIAL: https://blog.logrocket.com/using-authentication-in-next-js/

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Credentials({
      name: 'Looselyhub',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'xxx@xxxx.com',
        },
        password: { label: 'Senha', type: 'password' },
      },
      authorize: async (credentials) => {
        const mongo = new Mongo()
        const response = await mongo.query('users', {
          username: credentials.username,
        })
        const match = await bcrypt.compare(
          credentials.password,
          response[0].password
        )
        let user
        if (match) {
          user = {
            id: response[0]._id,
            username: response[0].username,
            email: response[0].email,
            name: response[0].name,
          }
        }
        if (user) {
          // Any user object returned here will be saved in the JSON Web Token
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user)
      return Promise.resolve(token) // ...here
    },
    session: async (session, user) => {
      session.user = user.user
      return Promise.resolve(session)
    },
  },
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)