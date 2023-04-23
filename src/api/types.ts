export type Course = {
  id: string
  name: string
  modules: Module[]
}

export type Module = {
  id: string
  name: string
  courseId: string
  lessons: Lesson[]
}

export type Lesson = {
  id: string
  name: string
  url: string
  moduleId: string
}
