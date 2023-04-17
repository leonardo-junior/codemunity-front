import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLessonService } from 'api/services/lessons/createLesson'
import { Overlay } from 'components/atoms/overlay'
import { useForm } from 'react-hook-form'

type FormValues = {
  className: string
  urlVideo: string
}

type CreateSectionModalProps = {
  courseSectionId: number
  onClose: () => void
}

export const CreateLessonModal = ({ courseSectionId, onClose }: CreateSectionModalProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutateAsync } = useMutation(createLessonService)
  const queryClient = useQueryClient()

  async function createLesson({ className, urlVideo }: FormValues) {
    if (!className || !courseSectionId) return

    try {
      await mutateAsync({ courseSectionId: +courseSectionId, name: className, url: urlVideo })

      queryClient.invalidateQueries(['course'])
    } catch (error) {
      console.log(error)
    } finally {
      onClose()
    }
  }

  return (
    <Overlay>
      <div className="bg-slate-600 p-6 flex flex-col gap-4">
        <button onClick={onClose}>Fechar</button>

        <form className="p-6 flex flex-col gap-2" onSubmit={handleSubmit(createLesson)}>
          <label className="text-gray-300">Nome da aula</label>
          <input {...register('className', { required: true, minLength: 4 })} />

          <label className="text-gray-300">Link do video</label>
          <input {...register('urlVideo', { required: true, minLength: 4 })} />

          <button>Criar</button>
        </form>
      </div>
    </Overlay>
  )
}
