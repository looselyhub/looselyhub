import React from 'react'

export default function GA() {
  const scriptText = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');`

  const url = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`
  return (
    <>
      <script
        key="script_ga"
        crossOrigin="anonymous"
        dangerouslySetInnerHTML={{ __html: scriptText }}
      />
      <script key="script_ga2" async src={url}></script>
    </>
  )
}
