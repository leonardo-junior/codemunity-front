import { useState } from 'react'
import { ModuleComponent } from './components/module'
import { CreateModuleModal } from './components/createModuleModal'
import type { Course } from 'api/types'
import { Button } from 'components/atoms/button'

type CourseProps = {
  course: Course
}

export const CourseComponent = ({ course }: CourseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col gap-6">
      {isModalOpen && <CreateModuleModal onClose={() => setIsModalOpen(false)} />}

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-gray-200">Curso de {course.name}</h1>

        <h3 className="text-2xl font-semibold text-gray-200">Módulo{course.modules.length !== 1 && 's'}</h3>

        {course.modules.length === 0 && (
          <p className="text-md font-semibold text-gray-200">Ainda não possui nenhum módulo</p>
        )}

        <ul className="flex flex-col gap-4">
          {course.modules?.map((module) => (
            <ModuleComponent key={module.id} module={module} />
          ))}
        </ul>
      </div>

      <Button onClick={() => setIsModalOpen((prev) => !prev)}>Criar módulo</Button>
    </main>
  )
}
