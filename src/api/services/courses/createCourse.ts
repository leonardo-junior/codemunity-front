import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const createCourseService = async (courseName: string) => {
  const { data }: AxiosResponse<Course> = await api.post(`/courses`, {
    name: courseName,
  })

  return data
}
