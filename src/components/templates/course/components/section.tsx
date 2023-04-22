import { useState } from 'react'
import Link from 'next/link'
import { CreateLessonModal } from './createLessonModal'
import { CourseSection } from 'api/types'

type SectionProps = {
  section: CourseSection
}

export const Section = ({ section }: SectionProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleDropDown(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    event.stopPropagation()

    setIsDropDownOpen(!isDropDownOpen)
  }

  function openCreateModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation()

    setIsModalOpen(true)
  }

  return (
    <>
      {isModalOpen && (
        <CreateLessonModal courseSectionId={section.id} onClose={() => setIsModalOpen(false)} />
      )}

      <li
        className={`flex flex-col gap-4 px-6 py-4 bg-neutral-800 rounded-md ${
          !isDropDownOpen && 'hover:bg-neutral-700 hover:cursor-pointer'
        }`}
        onClick={(event) => toggleDropDown(event)}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl text-gray-300 font-semibold">{section.name}</h2>

          <span className="text-xs text-gray-200">{section.classes.length}</span>
        </div>

        <div className={`${isDropDownOpen ? 'flex' : 'hidden'} flex-col gap-2`}>
          {section.classes?.map((item) => (
            <Link
              key={item.id}
              href={`/lessons/${item.id}`}
              className="text-gray-200"
              onClick={(event) => event.stopPropagation()}
            >
              <p>{item.name}</p>
            </Link>
          ))}

          <button
            className="text-gray-200 py-2 px-8 bg-neutral-600 rounded-md w-max hover:bg-neutral-500"
            onClick={(event) => openCreateModal(event)}
          >
            Criar aula
          </button>
        </div>
      </li>
    </>
  )
}
