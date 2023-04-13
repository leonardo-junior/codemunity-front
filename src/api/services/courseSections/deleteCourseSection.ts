import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { CourseSection } from 'api/types'

export const deleteCourseSectionService = async (courseSectionId: string) => {
  const { data }: AxiosResponse<CourseSection> = await api.delete(`/course-sections/${courseSectionId}`)

  return data
}
