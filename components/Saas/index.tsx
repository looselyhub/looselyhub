import React, { useState, useEffect } from 'react'
import Loading from '../Loading'
import styles from './Saas.module.scss'

export default function Saas({ url }) {
  const [loading, setLoading] = useState(true)
  const isArray = Array.isArray(url)

  useEffect(() => {
    setLoading(true)
  }, [url])

  function getGridType() {
    switch (url.length) {
      case 4:
        return styles.grid_4
      case 3:
        return styles.grid_3
      default:
        return styles.grid_2
    }
  }

  function createArray() {
    return (
      <div style={{ height: '100%', flex: 1 }}>
        <Loading active={loading} />
        <div className={`${styles.grid_div} ${getGridType()}`}>
          {url.map((urlString, i) => {
            return (
              <iframe
                key={`${urlString}_${i}`}
                scrolling="auto"
                src={urlString}
                frameBorder="0"
                onLoadStart={() => setLoading(true)}
                onLoad={() => setLoading(false)}
              />
            )
          })}
        </div>
      </div>
    )
  }

  if (isArray) {
    return createArray()
  }

  return (
    <div style={{ height: '100%', flex: 1 }}>
      <Loading active={loading} />
      <iframe
        style={{
          width: '100%',
          height: '100%',
        }}
        scrolling="auto"
        src={url}
        frameBorder="0"
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
