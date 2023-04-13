import { AxiosResponse } from 'axios'
import { api } from 'api'
import type { CourseSection } from 'api/types'

export const updateCourseSectionService = async (
  courseSectionId: string,
  courseSection: Partial<CourseSection>
) => {
  const { data }: AxiosResponse<CourseSection> = await api.put(
    `/course-sections/${courseSectionId}`,
    courseSection
  )

  return data
}
