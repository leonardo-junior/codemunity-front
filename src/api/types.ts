export type Course = {
  id: number
  name: string
  courseSections: CourseSection[]
}

export type CourseSection = {
  id: number
  name: string
  courseId: number
  classes: Class[]
}

export type Class = {
  id: number
  name: string
  url: string
}
