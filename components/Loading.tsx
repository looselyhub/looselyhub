import React from 'react'
import styles from '../styles/loader.module.scss'

export default function Loading({ active }) {
  return (
    <div className={styles.loader} style={active ? {} : { display: 'none' }} />
  )
}
