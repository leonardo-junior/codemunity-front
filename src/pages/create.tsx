import { CreateCourse } from 'components/create/course'
import { Layout } from 'components/layout/layout'

export default function CreatePage() {
  return (
    <Layout title="Criação" description="Página para criação edição cursos">
      <CreateCourse />
    </Layout>
  )
}
