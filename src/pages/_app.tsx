import { Inter } from 'next/font/google'
import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
