import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllCoursesService } from 'api/services/courses/getAllCourses'
import { CreateCourseModal } from './components/createCourseModal'
import type { Course } from 'api/types'
import { CourseCard } from './components/courseCard'

export const Courses = () => {
  const { data } = useQuery<Course[]>(['courses'], getAllCoursesService)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold text-gray-200">Cursos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>

      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="text-gray-200 py-2 px-8 ml-auto bg-slate-600 rounded-md w-max hover:bg-slate-500"
      >
        Criar curso
      </button>

      {isModalOpen && <CreateCourseModal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}
