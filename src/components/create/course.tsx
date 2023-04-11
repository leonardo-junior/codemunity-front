import { useRef } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllCoursesService } from 'api/services/courses/getAllCourses'
import { createCourseService } from 'api/services/courses/createCourse'
import { updateCourseService } from 'api/services/courses/updateCourse'
import { deleteCourseService } from 'api/services/courses/deleteCourse'
import type { Course } from 'api/types'

export const CreateCourse = () => {
  const courseNameRef = useRef<HTMLInputElement>(null)

  const { data: courses, refetch } = useQuery<Course[]>(['courses'], getAllCoursesService, {
    enabled: false,
  })

  const { mutate: createCourseMutate } = useMutation(createCourseService, {
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: deleteCourseMutate } = useMutation(() => deleteCourseService(4), {
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: updateCourseMutate } = useMutation(() => updateCourseService(1, { name: 'Outro nome' }), {
    onSuccess: () => {
      refetch()
    },
  })

  function createCourse() {
    const name = courseNameRef.current?.value

    if (!name) {
      return
    }

    createCourseMutate(name)
  }

  function updateCourse() {
    updateCourseMutate()
  }

  function deleteCourse() {
    deleteCourseMutate()
  }

  async function getAllCourses() {
    refetch()
  }

  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-semibold text-gray-200">Curso</h1>

        <input
          ref={courseNameRef}
          className="border-2 border-neutral-300 p-2 rounded-md"
          type="text"
          placeholder="Nome do curso"
        />

        {courses?.map((course) => (
          <div key={course.id}>
            <p className="text-gray-200">{course.name}</p>
          </div>
        ))}

        <button
          onClick={getAllCourses}
          className="bg-neutral-500 px-2 py-4 border-spacing-1 border-cyan-950 rounded-md"
        >
          Mostrar todos cursos
        </button>

        <button
          onClick={createCourse}
          className="bg-neutral-500 px-2 py-4 border-spacing-1 border-cyan-950 rounded-md"
        >
          Criar curso
        </button>

        <button
          onClick={updateCourse}
          className="bg-neutral-500 px-2 py-4 border-spacing-1 border-cyan-950 rounded-md"
        >
          Editar curso
        </button>

        <button
          onClick={deleteCourse}
          className="bg-neutral-500 px-2 py-4 border-spacing-1 border-cyan-950 rounded-md"
        >
          Deletar curso
        </button>
      </div>
    </main>
  )
}
