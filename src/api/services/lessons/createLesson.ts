import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const createLessonService = async (lessonName: string) => {
  const { data }: AxiosResponse<Lesson> = await api.post(`/classes`, {
    name: lessonName,
  })

  return data
}
