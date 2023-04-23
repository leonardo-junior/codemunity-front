import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const createLessonService = async (values: Pick<Lesson, 'moduleId' | 'name' | 'url'>) => {
  const { data }: AxiosResponse<Lesson> = await api.post(`/lessons`, values)

  return data
}
