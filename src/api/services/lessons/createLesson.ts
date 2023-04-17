import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { Lesson } from 'api/types'

type createLessonProps = {
  name: string
  courseSectionId: number
  url: string
}

export const createLessonService = async (values: createLessonProps) => {
  const { data }: AxiosResponse<Lesson> = await api.post(`/classes`, values)

  return data
}
