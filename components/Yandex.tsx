import React from 'react'

export default function Yandex() {
  const scriptText = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(${process.env.YANDEX}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
  });`
  const url = `https://mc.yandex.ru/watch/${process.env.YANDEX}`

  return (
    <>
      <script
        key="script_yandex"
        dangerouslySetInnerHTML={{ __html: scriptText }}
        crossOrigin="anonymous"
      />
      ,
      <noscript key="script_yandex2">
        <div>
          <img
            src={url}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
      ,
    </>
  )
}
