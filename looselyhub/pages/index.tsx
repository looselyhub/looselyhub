import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '../components/login'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Loading from '../components/Loading'
import Yandex from '../components/Yandex'
import GA from '../components/GA'

function Index() {
  const favicon = process.env.NEXT_PUBLIC_FAVICON
    ? process.env.NEXT_PUBLIC_FAVICON
    : '/favicon.ico'
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
        <link rel="shortcut icon" href={favicon} />
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <GA />
      </Head>
      <Yandex />
      <Loading active={loading} />
      {!loading && !session ? <Login /> : <div />}
    </div>
  )
}

export default Index
