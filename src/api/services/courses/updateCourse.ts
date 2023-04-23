import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const updateCourseService = async (
  courseId: string,
  values: Partial<Pick<Course, 'name' | 'modules'>>
) => {
  const { data }: AxiosResponse<Course> = await api.put(`/courses/${courseId}`, values)

  return data
}
