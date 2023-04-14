import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

export const getAllLessonsService = async () => {
  const { data }: AxiosResponse<Lesson[]> = await api.get(`/classes`)

  return data
}
