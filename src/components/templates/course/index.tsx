import type { Course } from 'api/types'
import { Section } from './components/section'

type CourseProps = {
  course: Course
}

export const CourseComponent = ({ course }: CourseProps) => {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-semibold text-gray-200">Curso de {course.name}</h1>

        <ul className="flex flex-col gap-4">
          {course.courseSections?.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </ul>
      </div>
    </main>
  )
}
