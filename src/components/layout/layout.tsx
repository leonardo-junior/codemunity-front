// vendors
import Head from 'next/head'

// components
import { Navbar } from './navbar/navbar'
import { Footer } from './footer/footer'

// styles
import * as S from './layout.styles'

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

      <S.Container>
        <Navbar />

        <S.Main>{children}</S.Main>

        <Footer />
      </S.Container>
    </>
  )
}
