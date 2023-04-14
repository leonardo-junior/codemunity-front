import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const updateLessonService = async (courseId: string, course: Partial<Lesson>) => {
  const { data }: AxiosResponse<Lesson> = await api.put(`/classes/${courseId}`, course)

  return data
}
