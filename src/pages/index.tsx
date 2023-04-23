import { Layout } from 'components/templates/layout/layout'
import { Courses } from 'components/templates/courses'
import { Course } from 'api/types'
import { useQuery } from '@tanstack/react-query'
import { getAllCoursesService } from 'api/services/courses/getAllCourses'
import { Loading } from 'components/atoms/loading'

export default function CoursesPage() {
  const { data, isLoading } = useQuery<Course[]>(['courses'], getAllCoursesService)

  return (
    <Layout title="Cursos" description="Página visualização de cursos" hasBackPage={false}>
      {isLoading || !data ? <Loading /> : <Courses courses={data} />}
    </Layout>
  )
}
