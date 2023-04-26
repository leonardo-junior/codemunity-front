import { YoutubePlaylist } from 'api/services/youtube/getAllVideosList'
import { Modal } from 'components/molecules/modal'
import { CreateLessonModal as CreateLesson } from './createLesson'

type CreateLessonModalProps = {
  moduleId: string
  onClose: () => void
  data?: YoutubePlaylist
}

export const CreateMultipleLessonModal = ({ moduleId, data, onClose }: CreateLessonModalProps) => {
  return (
    <Modal onClose={onClose}>
      <button>remove item</button>
      <ul className="flex flex-col gap-6 px-4 last:border-b-0">
        {data &&
          data?.items?.map((video, index) => (
            <li className="rounded-md border  border-gray-400 p-2" key={index}>
              <CreateLesson
                moduleId={moduleId}
                onClose={onClose}
                lessonName={video.snippet.title}
                urlVideo={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              />
            </li>
          ))}
      </ul>
    </Modal>
  )
}
