import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { CourseSection } from 'api/types'

export const getCourseSectionById = async (courseSectionId: string) => {
  const { data }: AxiosResponse<CourseSection> = await api.get(`/course-sections/${courseSectionId}`)

  return data
}
