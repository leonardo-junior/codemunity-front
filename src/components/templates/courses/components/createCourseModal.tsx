import { useMutation } from '@tanstack/react-query'
import { createCourseService } from 'api/services/courses/createCourse'
import { Overlay } from 'components/atoms/overlay'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type FormValues = {
  courseName: string
}

type CreateCourseModalProps = {
  onClose: () => void
}

export const CreateCourseModal = ({ onClose }: CreateCourseModalProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutate, data } = useMutation(createCourseService)
  const router = useRouter()

  async function createCourse({ courseName }: FormValues) {
    if (!courseName) return

    mutate(courseName)
  }

  if (data) {
    router.push(`/courses/${data.id}`)
  }

  return (
    <Overlay>
      <div className="bg-slate-600 p-6 flex flex-col gap-4">
        <button onClick={onClose}>Fechar</button>

        <form className="p-6 flex flex-col gap-2" onSubmit={handleSubmit(createCourse)}>
          <label className="text-gray-300">Nome do curso</label>
          <input {...register('courseName', { required: true, minLength: 4 })} />

          <button>Criar</button>
        </form>
      </div>
    </Overlay>
  )
}
