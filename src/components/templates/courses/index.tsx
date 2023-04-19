import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getAllCoursesService } from 'api/services/courses/getAllCourses'
import { CreateCourseModal } from './components/createCourseModal'
import type { Course } from 'api/types'

export const Courses = () => {
  const { data } = useQuery<Course[]>(['courses'], getAllCoursesService)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold text-gray-200">Cursos</h1>

      <ul className="grid grid-cols-4 gap-4">
        {data?.map((item) => (
          <Link key={item.id} href={`/courses/${item.id}`} className="text-gray-200">
            <li className="bg-slate-800 rounded-md flex items-center justify-center p-24 hover:bg-slate-600 hover:cursor-pointer">
              {item.name}
            </li>
          </Link>
        ))}

        <button onClick={() => setIsModalOpen((prev) => !prev)} className="text-gray-200">
          Criar curso
        </button>

        {isModalOpen && <CreateCourseModal onClose={() => setIsModalOpen(false)} />}
      </ul>
    </main>
  )
}
