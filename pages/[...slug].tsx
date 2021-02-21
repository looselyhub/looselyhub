import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import PrivateRoute from '../components/PrivateRoute'
import Saas from '../components/Saas'
import SaasList from '../services/SaasList'
import { useRouter } from 'next/router'
import LogEvent from '../services/LogEvent'
import styles from '../styles/slug.module.scss'
import Yandex from '../components/Yandex'
import GA from '../components/GA'

function Dashboard() {
  const router = useRouter()
  const [currentURL, setURL] = useState('')
  const [currentTitle, setTitle] = useState('LooselyHub')
  const [open, setOpen] = useState(false)
  const [saasList, setSaasList] = useState<SaasList>(new SaasList())

  async function fetchSaasList() {
    const saasListObj = new SaasList()
    await saasListObj.fetchList()
    setURL(saasListObj.getURLForSlug(router.asPath))
    setTitle(saasListObj.getTitleForSlug(router.asPath))
    setSaasList(saasListObj)
  }

  useEffect(() => {
    fetchSaasList()
    window.addEventListener('beforeunload', () => {
      const eventLogger = new LogEvent()
      eventLogger.close()
    })
  }, [])

  useEffect(() => {
    const url = saasList.getURLForSlug(router.asPath)
    if (url !== '') {
      const eventLogger = new LogEvent()
      eventLogger.pageView(router.asPath)
    }
    setURL(url)
    setTitle(saasList.getTitleForSlug(router.asPath))
  }, [router, saasList])

  function changeMenu() {
    setOpen(!open)
  }

  function appBar() {
    return (
      <div
        className={open ? styles.hamburguer_change : styles.hamburguer}
        onClick={() => changeMenu()}
      >
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
    )
  }

  function openStyle(openStatus: boolean) {
    if (openStatus) return {}
    return { display: 'none' }
  }

  function redirectToLooselyHub() {
    window.location.href = 'http://www.google.com.br'
  }

  function renderLogo() {
    return (
      <div className={styles.logo}>
        <img src="/logo.png" onClick={() => redirectToLooselyHub()} />
      </div>
    )
  }

  function renderHome() {
    if (saasList.getHome() === undefined) return <div />
    return (
      <div key={'HOME'} className={styles.home}>
        <a
          onClick={() => {
            setOpen(false)
            router.push('home')
          }}
        >
          HOME
        </a>
      </div>
    )
  }

  function drawer() {
    return (
      <div className={styles.sidebar} style={openStyle(open)}>
        {renderLogo()}
        {renderHome()}
        {saasList.getList().map((page) => (
          <div key={page.title}>
            <a
              onClick={() => {
                setOpen(false)
                router.push(`/${page.slug}`)
              }}
            >
              {page.title}
            </a>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{currentTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <GA />
      </Head>
      <Yandex />
      {appBar()}
      {drawer()}
      <Saas url={currentURL} />
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
