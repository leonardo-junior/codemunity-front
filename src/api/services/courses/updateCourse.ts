import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const updateCourseService = async (courseId: number, course: Partial<Course>) => {
  const { data }: AxiosResponse<Course> = await api.put(`/courses/${courseId}`, course)

  return data
}
