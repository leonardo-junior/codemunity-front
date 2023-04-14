import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const deleteLessonService = async (lessonId: string) => {
  const { data }: AxiosResponse<Lesson> = await api.delete(`/classes/${lessonId}`)

  return data
}
