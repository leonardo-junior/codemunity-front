import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { CourseSection } from 'api/types'

export const getAllCourseSectionsService = async () => {
  const { data }: AxiosResponse<CourseSection[]> = await api.get(`/course-sections`)

  return data
}
