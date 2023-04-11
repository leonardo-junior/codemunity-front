import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Course } from 'api/types'

export const getAllCoursesService = async () => {
  const { data }: AxiosResponse<Course[]> = await api.get(`/courses`)

  return data
}
