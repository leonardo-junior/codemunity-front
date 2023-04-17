import { useMutation } from '@tanstack/react-query'
import { createCourseSectionService } from 'api/services/courseSections/createCourseSection'
import { Overlay } from 'components/atoms/overlay'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type FormValues = {
  sectionName: string
}

type CreateSectionModalProps = {
  onClose: () => void
}

export const CreateSectionModal = ({ onClose }: CreateSectionModalProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutate } = useMutation(createCourseSectionService)
  const router = useRouter()

  const courseId = router.query.courseId

  async function createSection({ sectionName }: FormValues) {
    if (!sectionName || !courseId) return

    mutate({ courseId: +courseId, name: sectionName })

    onClose()
  }

  // TODO refresh page when success without onSucess

  return (
    <Overlay>
      <div className="bg-slate-600 p-6 flex flex-col gap-4">
        <button onClick={onClose}>Fechar</button>

        <form className="p-6 flex flex-col gap-2" onSubmit={handleSubmit(createSection)}>
          <label className="text-gray-300">Nome da sessão</label>
          <input {...register('sectionName', { required: true, minLength: 4 })} />

          <button>Criar</button>
        </form>
      </div>
    </Overlay>
  )
}
