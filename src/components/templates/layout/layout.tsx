import Head from 'next/head'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { useRouter } from 'next/router'
import { ImArrowLeft2 } from 'react-icons/im'

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
  hasBackPage?: boolean
}

export const Layout = ({ children, hasBackPage = true, title, description }: LayoutProps) => {
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

      <div className="flex min-h-screen w-full flex-col  bg-neutral-900">
        <Navbar />

        <main className="flex h-full w-full grow flex-col justify-center px-6 md:px-8 xl:px-12">
          <div className="mx-auto mt-6 h-full w-full max-w-7xl grow">
            {hasBackPage && (
              <button className="mb-6 flex items-center gap-2 text-xl text-gray-300" onClick={backPage}>
                <ImArrowLeft2 fontSize={32} />

                <span>Voltar</span>
              </button>
            )}

            {children}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
