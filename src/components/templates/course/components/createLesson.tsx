import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLessonService } from 'api/services/lessons/createLesson'
import { Button } from 'components/atoms/button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  finalLessonName: string
  urlVideo: string
}

type CreateLessonModalProps = {
  moduleId: string
  lessonName?: string
  urlVideo?: string
  onClose: () => void
  removeLesson?: () => void
}

export const CreateLessonModal = ({ moduleId, lessonName, urlVideo, onClose }: CreateLessonModalProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutateAsync, isLoading } = useMutation(createLessonService)
  const [createdLesson, setCreatedLesson] = useState(false)
  const queryClient = useQueryClient()

  async function createLesson({ finalLessonName, urlVideo }: FormValues) {
    if (!finalLessonName || !moduleId) return

    try {
      await mutateAsync({ moduleId, name: finalLessonName, url: urlVideo })

      queryClient.invalidateQueries(['course'])
      if (urlVideo) setCreatedLesson(true)
    } catch (error) {
      console.log(error)
    } finally {
      !urlVideo && onClose()
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(createLesson)}>
      <div className="flex w-full flex-col gap-2">
        <label className="text-gray-300">Nome da aula</label>
        <input {...register('finalLessonName', { required: true, minLength: 4 })} defaultValue={lessonName} />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="text-gray-300">Link do video</label>
        <input {...register('urlVideo', { required: true, minLength: 4 })} value={urlVideo} />
      </div>

      <Button className="bg-neutral-500 hover:bg-neutral-400" disabled={createdLesson || isLoading}>
        {isLoading ? 'Criando...' : createdLesson ? 'Criado' : 'Criar'}
      </Button>
    </form>
  )
}
