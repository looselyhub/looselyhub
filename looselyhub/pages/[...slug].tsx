import React, { useEffect, useState, useCallback } from 'react'
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
import Sidebar from 'components/Sidebar/Sidebar'

let pusher
if (process.env.NEXT_PUBLIC_PUSHER) {
  pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER, {
    cluster: 'us2',
  })
}

function Dashboard() {
  const router = useRouter()
  const [reloading, setReloading] = useState(false)
  const [currentURL, setURL] = useState<string | string[]>('')
  const [showDrawer, setShowDrawer] = useState(false)
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
    if (pusher) {
      const channel = pusher.subscribe('saas-change')
      channel.bind('saas-change', function () {
        if (reloading === false) {
          setReloading(true)
          fetchSaasList()
        }
      })
    }
  }, [])

  useEffect(() => {
    const url = saasList.getURLForSlug(router.asPath)
    const newGridTemplate = saasList.getGridTemplateForSlug(router.asPath)
    if (url !== '') {
      const eventLogger = new LogEvent()
      eventLogger.pageView(router.asPath)
    }
    setURL(url)
    setShowDrawer(saasList.getShowMenu(router.asPath))
    setGridTemplate(newGridTemplate)
    setTitle(saasList.getTitleForSlug(router.asPath))
  }, [router, saasList])

  function renderHome() {
    if (saasList.getHome() === undefined) return <div />
    return <SaasRow open={open} page={saasList.getHome()} update={updatePage} />
  }

  function updatePage(page) {
    router.push(`/${page.slug}`)
  }

  const createListElements = useCallback(() => {
    const result: Array<JSX.Element> = [<li key="home">{renderHome()}</li>]
    {
      saasList.getList().forEach((page) =>
        result.push(
          <li key={page.slug}>
            <SaasRow open={open} page={page} update={updatePage} />
          </li>
        )
      )
    }
    return result
  }, [saasList])

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
      {showDrawer ? (
        <Sidebar
          open={open}
          setOpen={setOpen}
          listElements={createListElements()}
        />
      ) : (
        <></>
      )}
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
