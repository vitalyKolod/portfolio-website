import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://script.click-chat.ru/chat.js?wid=36ac2a9e-bd4e-42e6-a61e-7bd61f1d98bd"
        strategy="lazyOnload" // или "afterInteractive"
        onLoad={() => {
          console.log('Скрипт чата загружен')
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
// 	return <Component {...pageProps} />
// }
