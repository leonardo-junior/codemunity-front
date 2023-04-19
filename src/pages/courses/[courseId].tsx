// vendors
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

// components
import { Layout } from 'components/templates/layout/layout'
import { CourseComponent } from 'components/templates/course'

// services
import { getCourseById } from 'api/services/courses/getCourseById'

// types
import { Course } from 'api/types'

export default function CoursePage() {
  const router = useRouter()
  const courseId = router.query.courseId as string

  const { data, isLoading } = useQuery<Course>(['course', courseId], () => getCourseById(courseId), {
    enabled: !!courseId,
  })

  return (
    <Layout title={`Curso de ${data?.name}`} description={`Página do curso de ${data?.name}`}>
      {isLoading || !data ? <div>Carregando...</div> : <CourseComponent course={data} />}
    </Layout>
  )
}
