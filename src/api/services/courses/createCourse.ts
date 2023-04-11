import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const createCourseService = async (corseName: string) => {
  const { data }: AxiosResponse<Course> = await api.post(`/courses`, {
    name: corseName,
  })

  return data
}
