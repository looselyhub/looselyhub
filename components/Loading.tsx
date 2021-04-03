import React from 'react'
import styles from '../styles/loader.module.scss'

const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
  ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
  : '#EF767A'
export default function Loading({ active, color = primaryColor }) {
  return (
    <div
      className={styles.loader}
      style={active ? { color: color } : { display: 'none' }}
    />
  )
}
