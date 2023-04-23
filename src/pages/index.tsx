import { Layout } from 'components/templates/layout/layout'
import { Courses } from 'components/templates/courses'

export default function CoursesPage() {
  return (
    <Layout title="Cursos" description="Página visualização de cursos" hasBackPage={false}>
      <Courses />
    </Layout>
  )
}
