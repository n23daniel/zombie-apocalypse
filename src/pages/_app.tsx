import type { AppProps } from 'next/app'
import Head from 'next/head'
import Modal from 'react-modal'

Modal.setAppElement('body')

import '../styles/main.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Survivor or Infected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
