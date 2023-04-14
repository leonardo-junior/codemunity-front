import type { Lesson } from 'api/types'
import ReactPlayer from 'react-player'

type ClassProps = {
  lesson: Lesson
}

export const LessonComponent = ({ lesson }: ClassProps) => {
  return (
    <div className="flex flex-col m-h-full items-center gap-6 p-6">
      <h1 className="text-4xl font-semibold text-gray-200">Aula de {lesson.name}</h1>

      <div className="aspect-16/9 max-w-7xl w-full rounded-lg overflow-hidden bg-transparent">
        <ReactPlayer
          url={lesson.url}
          height="100%"
          width="100%"
          onEnded={() => console.log('ended')}
          controls
          volume={1}
          playing={false}
        />
      </div>
    </div>
  )
}
