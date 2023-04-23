import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const getLessonById = async (lessonId: string) => {
  const { data }: AxiosResponse<Lesson> = await api.get(`/lessons/${lessonId}`)

  return data
}
