import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLessonService } from 'api/services/lessons/createLesson'
import { Modal } from 'components/molecules/modal'
import { useForm } from 'react-hook-form'

type FormValues = {
  className: string
  urlVideo: string
}

type CreateLessonModalProps = {
  moduleId: string
  onClose: () => void
}

export const CreateLessonModal = ({ moduleId: moduleId, onClose }: CreateLessonModalProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutateAsync } = useMutation(createLessonService)
  const queryClient = useQueryClient()

  async function createLesson({ className, urlVideo }: FormValues) {
    if (!className || !moduleId) return

    try {
      await mutateAsync({ moduleId, name: className, url: urlVideo })

      queryClient.invalidateQueries(['course'])
    } catch (error) {
      console.log(error)
    } finally {
      onClose()
    }
  }

  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(createLesson)}>
        <div className="flex w-full flex-col gap-2">
          <label className="text-gray-300">Nome da aula</label>
          <input {...register('className', { required: true, minLength: 4 })} />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label className="text-gray-300">Link do video</label>
          <input {...register('urlVideo', { required: true, minLength: 4 })} />
        </div>

        <button className="text-gray-300">Criar</button>
      </form>
    </Modal>
  )
}
