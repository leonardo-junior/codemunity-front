import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const deleteCourseService = async (courseId: string) => {
  const { data }: AxiosResponse<Course> = await api.delete(`/courses/${courseId}`)

  return data
}
