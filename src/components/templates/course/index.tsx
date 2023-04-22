import { useState } from 'react'
import { Section } from './components/section'
import { CreateSectionModal } from './components/createSectionModal'
import type { Course } from 'api/types'

type CourseProps = {
  course: Course
}

export const CourseComponent = ({ course }: CourseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col gap-6">
      {isModalOpen && <CreateSectionModal onClose={() => setIsModalOpen(false)} />}

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-gray-200">Curso de {course.name}</h1>

        <h3 className="text-2xl font-semibold text-gray-200">Seções</h3>

        <ul className="flex flex-col gap-4">
          {course.courseSections?.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </ul>
      </div>

      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="w-max rounded-md bg-neutral-600 px-8 py-2 text-gray-200 hover:bg-neutral-500"
      >
        Criar seção
      </button>
    </main>
  )
}
