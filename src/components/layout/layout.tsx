import Head from 'next/head'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
}

export const Layout = ({ children, title, description }: LayoutProps) => {
  const router = useRouter()

  function backPage() {
    router.back()
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen w-full bg-neutral-900">
        <Navbar />

        <main className="w-full h-full flex-col flex-grow">
          <h1 className="text-gray-300 text-lg" onClick={backPage}>
            Voltar
          </h1>

          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}
