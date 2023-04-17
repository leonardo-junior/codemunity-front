import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { CourseSection } from 'api/types'

type CreateCourseSectionProps = {
  name: string
  courseId: number
}

export const createCourseSectionService = async (values: CreateCourseSectionProps) => {
  const { data }: AxiosResponse<CourseSection> = await api.post(`/course-sections`, values)

  return data
}
