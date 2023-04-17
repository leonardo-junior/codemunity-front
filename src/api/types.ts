export type Course = {
  id: number
  name: string
  courseSections: CourseSection[]
}

export type CourseSection = {
  id: number
  name: string
  courseId: number
  classes: Lesson[]
}

export type Lesson = {
  id: number
  name: string
  url: string
  courseSectionId: number
}
