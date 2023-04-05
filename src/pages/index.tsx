import { Layout } from 'components/layout/layout'
import { Home } from 'components/home/home'

export default function HomePage() {
  return (
    <>
      <Layout title="Codemunity" description="Página principal">
        <Home />
      </Layout>
    </>
  )
}
