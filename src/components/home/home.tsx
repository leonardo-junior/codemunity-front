import { convertToEmbedLink } from 'utils/convertToEmbedLink'
import { VideoList } from './components/videoList'

const mockvideos = new Array(4).fill('')

export const Home = () => {
  const link = convertToEmbedLink('https://www.youtube.com/watch?v=3aot2GJmKUM&ab_channel=Kinechan')

  return (
    <main className="flex flex-col justify-center gap-8 w-full h-full p-14">
      <h1 className="text-6xl text-center font-semibold text-gray-200">Principais</h1>

      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-4xl text-gray-200">JavaScript</h2>

        <VideoList mockvideos={mockvideos} link={link} />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-4xl text-gray-200">CSS</h2>

        <VideoList mockvideos={mockvideos} link={link} />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-4xl text-gray-200">HTML</h2>

        <VideoList mockvideos={mockvideos} link={link} />
      </div>
    </main>
  )
}
