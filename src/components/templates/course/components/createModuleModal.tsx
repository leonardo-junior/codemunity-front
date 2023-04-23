import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createModuleService } from 'api/services/modules/createModule'
import { Button } from 'components/atoms/button'
import { Modal } from 'components/molecules/modal'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type FormValues = {
  moduleName: string
}

type CreateModuleModalProps = {
  onClose: () => void
}

export const CreateModuleModal = ({ onClose }: CreateModuleModalProps) => {
  const queryClient = useQueryClient()

  const { register, handleSubmit } = useForm<FormValues>()
  const { mutateAsync } = useMutation({
    mutationFn: createModuleService,
  })
  const router = useRouter()

  const courseId = router.query.courseId as string

  async function createModule({ moduleName }: FormValues) {
    if (!moduleName || !courseId) return

    try {
      await mutateAsync({ courseId: courseId, name: moduleName })

      queryClient.invalidateQueries(['course'])
    } catch (error) {
      console.log(error)
    } finally {
      onClose()
    }
  }

  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(createModule)}>
        <div className="flex w-full flex-col gap-2">
          <label className="text-gray-300">Nome da sessão</label>
          <input {...register('moduleName', { required: true, minLength: 4 })} />
        </div>

        <Button className="bg-neutral-500 hover:bg-neutral-400">Criar</Button>
      </form>
    </Modal>
  )
}
