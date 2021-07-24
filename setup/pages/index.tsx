import React, { useEffect } from 'react'
import Head from 'next/head'

import Setup from '../components/Setup'

function Index() {

  function renderSetup() {
    return (
      <div>
        <Head>
          <link rel="shortcut icon" href={'/favicon.ico'} />
          <title>Looselyhub Setup</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Setup />
      </div>
    )
  }

  return renderSetup()
  
}

export default Index
