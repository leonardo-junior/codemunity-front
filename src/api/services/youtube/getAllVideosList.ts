import { AxiosResponse } from 'axios'
import { api } from 'api'

export type YoutubePlaylist = {
  kind: string
  etag: string
  items: Item[]
  pageInfo: PageInfo
}

export type Item = {
  kind: string
  etag: string
  id: string
  snippet: Snippet
}

export type Snippet = {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  playlistId: string
  position: number
  resourceId: ResourceID
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
}

export type ResourceID = {
  kind: string
  videoId: string
}

export type Thumbnails = {
  default: Default
  medium: Default
  high: Default
  standard: Default
  maxres: Default
}

export type Default = {
  url: string
  width: number
  height: number
}

export type PageInfo = {
  totalResults: number
  resultsPerPage: number
}

export const getAllVideosService = async (playlistId: string, maxResults?: number) => {
  const params = {
    part: 'snippet',
    maxResults: maxResults || 100,
    playlistId: playlistId,
    key: process.env.NEXT_PUBLIC_YT_KEY,
  }

  const { data }: AxiosResponse<YoutubePlaylist> = await api.get(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    { params }
  )

  return data
}
