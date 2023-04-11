import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })

type Props = {
  link?: string
  mockvideos: string[]
}

export const VideoList = ({ link, mockvideos }: Props) => {
  return (
    <div className="flex gap-8 w-full overflow-hidden">
      {mockvideos.map((video, index) => (
        <div
          key={index}
          className="aspect-16/9 w-1/4 min-w-[calc(25%-1.5rem)] rounded-lg overflow-hidden bg-transparent"
        >
          <ReactPlayer
            url={link}
            height="100%"
            width="100%"
            onEnded={() => console.log('ended')}
            light
            controls
            volume={1}
            playing={true}
            stopOnUnmount={false}
          />
        </div>
      ))}
    </div>
  )
}
