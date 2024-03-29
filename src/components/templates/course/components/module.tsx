import { useState } from 'react'
import Link from 'next/link'
import { CreateLessonModal } from './createLesson'
import { Module } from 'api/types'
import { Button } from 'components/atoms/button'
import { CreateLessonsByPlaylistModal } from './createLessonsByPlaylistModal'
import { Modal } from 'components/molecules/modal'

type ModuleComponentProps = {
  module: Module
}

export const ModuleComponent = ({ module }: ModuleComponentProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [isCreateLessonModalOpen, setIsCreateLessonModalOpen] = useState(false)
  const [isAddLessonByPlaylistOpen, setIsAddLessonByPlaylistOpen] = useState(false)

  function toggleDropDown(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    event.stopPropagation()

    setIsDropDownOpen(!isDropDownOpen)
  }

  function openCreateModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation()

    setIsCreateLessonModalOpen(true)
  }

  return (
    <>
      {isCreateLessonModalOpen && (
        <Modal onClose={() => setIsCreateLessonModalOpen(false)}>
          <CreateLessonModal moduleId={module.id} onClose={() => setIsCreateLessonModalOpen(false)} />
        </Modal>
      )}

      {isAddLessonByPlaylistOpen && (
        <CreateLessonsByPlaylistModal
          moduleId={module.id}
          onClose={() => setIsAddLessonByPlaylistOpen(false)}
        />
      )}

      <li
        className={`flex flex-col gap-4 rounded-md bg-neutral-800 px-6 py-4 ${
          !isDropDownOpen && 'hover:cursor-pointer hover:bg-neutral-700'
        }`}
        onClick={(event) => toggleDropDown(event)}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-300">{module.name}</h2>

          <span className="text-xs text-gray-200">{module.lessons.length}</span>
        </div>

        <div className={`${isDropDownOpen ? 'flex' : 'hidden'} flex-col gap-2`}>
          {module.lessons?.map((item) => (
            <Link
              key={item.id}
              href={`/lessons/${item.id}`}
              className="text-gray-200"
              onClick={(event) => event.stopPropagation()}
            >
              <p>{item.name}</p>
            </Link>
          ))}

          <Button onClick={(event) => openCreateModal(event)}>Criar aula</Button>

          <Button onClick={() => setIsAddLessonByPlaylistOpen(true)}>Criar de playlist</Button>
        </div>
      </li>
    </>
  )
}
