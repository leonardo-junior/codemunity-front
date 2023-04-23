import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const updateLessonService = async (
  courseId: string,
  values: Partial<Pick<Lesson, 'moduleId' | 'name' | 'url'>>
) => {
  const { data }: AxiosResponse<Lesson> = await api.put(`/lessons/${courseId}`, values)

  return data
}
