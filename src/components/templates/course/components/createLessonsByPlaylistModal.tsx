import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllVideosService } from 'api/services/youtube/getAllVideosList'
import { Button } from 'components/atoms/button'
import { Modal } from 'components/molecules/modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateMultipleLessonModal } from './createMultIpleLessonModal'

type FormValues = {
  [key: string]: string
  urlList: string
  urlVideo: string
}

type CreateLessonModalProps = {
  moduleId: string
  onClose: () => void
}

export const CreateLessonsByPlaylistModal = ({ moduleId, onClose }: CreateLessonModalProps) => {
  const { register, handleSubmit, getValues } = useForm<FormValues>()
  const [search, setSearch] = useState(false)
  const queryClient = useQueryClient()

  function getListIdFromUrl(url: string) {
    const match = url.match(/list=([^&]+)/)
    return match ? match[1] : null
  }

  const { data } = useQuery(
    ['listVideos'],
    () => {
      const { urlList } = getValues()

      const listId = getListIdFromUrl(urlList)

      if (!listId) return

      return getAllVideosService(listId)
    },
    {
      enabled: search,
    }
  )

  function handleClose() {
    onClose()

    queryClient.setQueryData(['listVideos'], null)
  }

  return (
    <Modal onClose={handleClose}>
      {!data ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(() => setSearch(true))}>
          <div className="flex w-full flex-col gap-2">
            <label className="text-gray-300">Link da lista</label>
            <input {...register('urlList', { required: true, minLength: 4 })} />
          </div>

          <Button className="bg-neutral-500 hover:bg-neutral-400">Buscar</Button>
        </form>
      ) : (
        <CreateMultipleLessonModal moduleId={moduleId} data={data} onClose={handleClose} />
      )}
    </Modal>
  )
}
