import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getAllCoursesService } from 'api/services/courses/getAllCourses'
import type { Course } from 'api/types'

export const Courses = () => {
  const { data } = useQuery<Course[]>(['courses'], getAllCoursesService)

  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-semibold text-gray-200">Cursos</h1>

        <ul className="grid grid-cols-4 gap-4">
          {data?.map((item) => (
            <Link key={item.id} href={`/courses/${item.id}`} className="text-gray-200">
              <li className="bg-slate-800 rounded-md flex items-center justify-center p-24 hover:bg-slate-600 hover:cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  )
}
