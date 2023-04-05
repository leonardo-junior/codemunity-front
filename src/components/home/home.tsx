import { convertToEmbedLink } from 'utils/convertToEmbedLink'

const mockvideos = new Array(5).fill('')

export const Home = () => {
  const link = convertToEmbedLink('https://www.youtube.com/watch?v=3aot2GJmKUM&ab_channel=Kinechan')

  return (
    <main>
      <div className="flex flex-col justify-center gap-6 w-full h-full p-8">
        <h1 className="text-4xl text-center font-semibold text-gray-200">Home1</h1>

        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl text-gray-200">JavaScript</h2>

          <div className="grid grid-cols-4 w-full h-full gap-4">
            {mockvideos.map((video, index) => (
              <iframe
                key={index}
                src={link}
                title="YouTube videoplayer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
