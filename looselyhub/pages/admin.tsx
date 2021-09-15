import React, { useState } from 'react'
import Head from 'next/head'
import AdminRoute from 'components/AdminRoute'
import Sidebar from 'components/Sidebar/Sidebar'
import styles from 'styles/slug.module.scss'

import URLCrud from 'components/Admin/URLCrud/URLCrud'

function Admin() {
  const favicon = process.env.NEXT_PUBLIC_FAVICON
    ? process.env.NEXT_PUBLIC_FAVICON
    : '/favicon.ico'
  const [open, setOpen] = useState(false)

  function renderList() {
    const result = []
    for (let i = 0; i < 10; i += 1) {
      result.push(<li>teste</li>)
    }
    return result
  }

  return (
    <div className={styles.mainDiv}>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
        <title>ADMIN - Looseyhub</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Sidebar open={open} setOpen={setOpen} listElements={renderList()} />
      <URLCrud />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default AdminRoute(Admin)
