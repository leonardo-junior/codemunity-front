import { useMutation } from '@tanstack/react-query'
import { createCourseService } from 'api/services/courses/createCourse'
import { Modal } from 'components/molecules/modal'
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
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(createCourse)}>
        <div className="flex w-full flex-col gap-2">
          <label className="text-gray-300">Nome do curso</label>
          <input {...register('courseName', { required: true, minLength: 4 })} />
        </div>

        <button className="text-gray-300">Criar</button>
      </form>
    </Modal>
  )
}
