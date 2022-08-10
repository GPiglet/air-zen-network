import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { LanguageProvider } from '../contexts/language'
import { appWithTranslation } from "next-i18next";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Air Zen</title>
        <link rel="shortcut icon" href="/brand.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css" />
      </Head>
      {/* <LanguageProvider> */}
        <Component {...pageProps} />
      {/* </LanguageProvider> */}
    </>
  )
}

export default appWithTranslation(MyApp)



