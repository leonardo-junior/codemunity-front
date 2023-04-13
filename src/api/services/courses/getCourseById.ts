import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const getCourseById = async (courseId: string) => {
  const { data }: AxiosResponse<Course> = await api.get(`/courses/${courseId}`)

  return data
}
