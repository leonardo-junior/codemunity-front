export function convertToEmbedLink(url: string) {
  if (url === undefined) return

  const videoId = url
    .split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2]
    .split('%')[0]
    .split('?')[0]
    .replace('&ab_channel', '/rel')

  return `https://www.youtube.com/embed/${videoId}`
}
