import React from 'react'
import style from '../styles/saasrow.module.scss'

export default function SaasRow({ open, page, update }) {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
    ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
    : '#EF767A'
  function getIconStyle() {
    if (!open) {
      return style.iconContainerClosed
    }
    return style.iconContainer
  }

  function getAcronym(title) {
    const titleSplit = title.split(' ')
    if (titleSplit.length > 1) {
      return (
        titleSplit[0].slice(0, 1).toUpperCase() +
        titleSplit[1].slice(0, 1).toUpperCase()
      )
    }
    return title.slice(0, 2).toUpperCase()
  }

  function getIcon() {
    if (page.icon) {
      return <span className="material-icons">{page.icon}</span>
    }
    return <p>{getAcronym(page.title)}</p>
  }

  return (
    <a
      style={{ color: primaryColor }}
      className={style.link}
      onClick={() => {
        update(page)
      }}
    >
      <div className={getIconStyle()}>{getIcon()}</div>
      {open ? <p className={style.title}>{page.title}</p> : <div />}
    </a>
  )
}
