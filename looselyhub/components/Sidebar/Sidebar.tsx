import React from 'react'
import styles from 'styles/sidebar.module.scss'

interface SideBarProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  listElements: Array<JSX.Element>
}

export default function Sidebar(props: SideBarProps): JSX.Element {
  const { open, setOpen, listElements } = props

  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
    ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
    : '#EF767A'
  const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR
    ? process.env.NEXT_PUBLIC_SECONDARY_COLOR
    : '#FCE247'

  function redirectToLooselyHub() {
    window.location.href = 'http://www.looselyhub.com/?ref=demo'
  }

  function styleLogo() {
    if (!open) {
      return styles.logoClosed
    }
    return styles.logo
  }

  function sideBarOpenStyle() {
    if (!open) {
      return styles.hamburguerClosed
    }
    return styles.hamburguer
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

  function openStyle() {
    if (!open) {
      return styles.sidebarClosed
    }
    return styles.sidebar
  }

  return (
    <div className={openStyle()}>
      {renderLogo()}
      <ul className={styles.list}>{listElements}</ul>
    </div>
  )
}
