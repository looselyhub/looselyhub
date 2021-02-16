import React, { useState, useEffect } from 'react'
import Loading from './Loading'

export default function Saas({ url }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
  }, [url])
  return (
    <div style={{ height: '100%' }}>
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
