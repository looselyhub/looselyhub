import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '../components/login'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Loading from '../components/Loading'
import Yandex from '../components/Yandex'

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
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Yandex />
      </Head>
      <Loading active={loading} />
      {!loading && !session ? <Login /> : <div />}
    </div>
  )
}

export default Index
