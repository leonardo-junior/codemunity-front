// vendors
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

// components
import { Layout } from 'components/templates/layout/layout'

// services
import { getLessonById } from 'api/services/lessons/getLessonById'

// types
import { Lesson } from 'api/types'
import { LessonComponent } from 'components/templates/lesson'

export default function LessonPage() {
  const router = useRouter()
  const lessonId = router.query.lessonId as string

  const { data, isLoading } = useQuery<Lesson>(['lesson', lessonId], () => getLessonById(lessonId), {
    enabled: !!lessonId,
  })

  return (
    <Layout title={`Curso de ${data?.name}`} description={`Página do curso de ${data?.name}`}>
      {isLoading || !data ? <div>Carregando...</div> : <LessonComponent lesson={data} />}
    </Layout>
  )
}
