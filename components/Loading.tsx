import React from 'react'
import styles from '../styles/loader.module.scss'

export default function Loading({ active, color = '#ef767a' }) {
  return (
    <div
      className={styles.loader}
      style={active ? { color: color } : { display: 'none' }}
    />
  )
}
