import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const createCourseSectionService = async (name: string) => {
  const { data }: AxiosResponse<Course> = await api.post(`/course-sections`, {
    name,
  })

  return data
}
