import { CreateCourse } from 'components/create/course'
import { Layout } from 'components/layout/layout'

export default function CreateCoursePage() {
  return (
    <Layout title="Criar curso" description="Página para criação de cursos">
      <CreateCourse />
    </Layout>
  )
}
