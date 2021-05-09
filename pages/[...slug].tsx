import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import PrivateRoute from 'components/PrivateRoute'
import Saas from 'components/Saas'
import SaasList from 'services/SaasList'
import { useRouter } from 'next/router'
import LogEvent from 'services/LogEvent'
import Yandex from 'components/Yandex'
import GA from 'components/GA'
import SaasRow from 'components/SaasRow'
import Pusher from 'pusher-js'
import styles from '../styles/slug.module.scss'

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER, {
  cluster: 'us2',
})

function Dashboard() {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
    ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
    : '#EF767A'
  const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR
    ? process.env.NEXT_PUBLIC_SECONDARY_COLOR
    : '#FCE247'
  const router = useRouter()
  const [reloading, setReloading] = useState(false)
  const [currentURL, setURL] = useState<string | string[]>('')
  const [gridTemplate, setGridTemplate] = useState(undefined)
  const [currentTitle, setTitle] = useState('LooselyHub')
  const [open, setOpen] = useState(false)
  const [saasList, setSaasList] = useState<SaasList>(new SaasList())
  async function fetchSaasList() {
    const saasListObj = new SaasList()
    await saasListObj.fetchList()
    setReloading(false)
    setSaasList(saasListObj)
  }

  useEffect(() => {
    fetchSaasList()
    const channel = pusher.subscribe('saas-change')
    channel.bind('saas-change', function () {
      if (reloading === false) {
        setReloading(true)
        fetchSaasList()
      }
    })
  }, [])

  useEffect(() => {
    const url = saasList.getURLForSlug(router.asPath)
    const newGridTemplate = saasList.getGridTemplateForSlug(router.asPath)
    if (url !== '') {
      const eventLogger = new LogEvent()
      eventLogger.pageView(router.asPath)
    }
    setURL(url)
    setGridTemplate(newGridTemplate)
    setTitle(saasList.getTitleForSlug(router.asPath))
  }, [router, saasList])

  function redirectToLooselyHub() {
    window.location.href = 'http://www.looselyhub.com/?ref=demo'
  }

  function sideBarOpenStyle() {
    if (!open) {
      return styles.hamburguerClosed
    }
    return styles.hamburguer
  }

  function styleLogo() {
    if (!open) {
      return styles.logoClosed
    }
    return styles.logo
  }

  function renderLogo() {
    return (
      <div
        className={styles.sidebarHeader}
        style={{ backgroundColor: primaryColor }}
      >
        <div className={sideBarOpenStyle()} onClick={() => setOpen(!open)}>
          <div style={{ backgroundColor: secondaryColor }}></div>
          <div style={{ backgroundColor: secondaryColor }}></div>
          <div style={{ backgroundColor: secondaryColor }}></div>
        </div>

        <img
          className={styleLogo()}
          src={
            process.env.NEXT_PUBLIC_LOGO
              ? process.env.NEXT_PUBLIC_LOGO
              : '/logo.png'
          }
          onClick={() => redirectToLooselyHub()}
        />
      </div>
    )
  }

  function renderHome() {
    if (saasList.getHome() === undefined) return <div />
    return <SaasRow open={open} page={saasList.getHome()} update={updatePage} />
  }

  function updatePage(page) {
    router.push(`/${page.slug}`)
  }

  function openStyle() {
    if (!open) {
      return styles.sidebarClosed
    }
    return styles.sidebar
  }

  function drawer() {
    return (
      <div className={openStyle()}>
        {renderLogo()}
        <ul className={styles.list}>
          <li>{renderHome()}</li>
          {saasList.getList().map((page) => (
            <li key={page.slug}>
              <SaasRow open={open} page={page} update={updatePage} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  const favicon = process.env.NEXT_PUBLIC_FAVICON
    ? process.env.NEXT_PUBLIC_FAVICON
    : '/favicon.ico'
  return (
    <div className={styles.mainDiv}>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
        <title>{currentTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <GA />
      </Head>
      <Yandex />
      {drawer()}
      <Saas url={currentURL} gridTemplate={gridTemplate} />
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

export default PrivateRoute(Dashboard)
