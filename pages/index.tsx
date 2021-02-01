import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '../components/login'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function Index() {
  const [session, loading] = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!loading && session) {
      router.push('/home')
    }
  }, [loading])

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Login />
    </div>
  )
}

export default Index
