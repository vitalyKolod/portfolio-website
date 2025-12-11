import Garland from '@/components/Helper/Garland'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Snowfall from 'react-snowfall'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Snowfall
        snowflakeCount={60} // количество снежинок
        color="white" // цвет снежинок
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999, // поверх всего
          pointerEvents: 'none', // чтобы не мешал клику
        }}
      />

      <Script
        src="https://script.click-chat.ru/chat.js?wid=36ac2a9e-bd4e-42e6-a61e-7bd61f1d98bd"
        strategy="lazyOnload" // или "afterInteractive"
        onLoad={() => {
          console.log('Скрипт чата загружен')
        }}
      />
      <Garland />
      <Component {...pageProps} />
    </>
  )
}

// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
// 	return <Component {...pageProps} />
// }
