import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { StoreProvider } from '../contexts/Store'
import { appWithTranslation } from "next-i18next";


import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Air Zen</title>
        <link rel="shortcut icon" href="/brand.svg" />
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

export default appWithTranslation(MyApp)



