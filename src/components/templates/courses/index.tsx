import { useState } from 'react'
import { CreateCourseModal } from './components/createCourseModal'
import type { Course } from 'api/types'
import { CourseCard } from './components/courseCard'
import { Button } from 'components/atoms/button'

type CoursesProps = {
  courses: Course[]
}

export const Courses = ({ courses }: CoursesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold text-gray-200">Cursos</h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>

      <Button onClick={() => setIsModalOpen((prev) => !prev)}>Criar curso</Button>

      {isModalOpen && <CreateCourseModal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}
