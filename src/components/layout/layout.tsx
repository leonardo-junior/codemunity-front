// vendors
import Head from 'next/head'

// components
import { Navbar } from './navbar/navbar'
import { Footer } from './footer/footer'

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
}

export const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen w-full">
        <Navbar />

        <main className="w-full h-full flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  )
}
