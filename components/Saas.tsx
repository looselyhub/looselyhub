import React from 'react'

export default function Saas({ url }) {
  return (
    <div style={{ height: '100%' }}>
      <iframe
        style={{
          width: '100%',
          height: '100%',
        }}
        scrolling="auto"
        src={url}
        frameBorder="0"
      />
    </div>
  )
}
