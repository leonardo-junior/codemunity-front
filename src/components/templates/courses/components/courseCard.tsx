import { Course } from 'api/types'
import { Tag } from 'components/atoms/tag'
import Link from 'next/link'

type CourseCardProps = {
  course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const tags = ['javascript', 'react', 'typescript']

  return (
    <Link key={course.id} href={`/courses/${course.id}`} className="text-gray-200">
      <li className="flex flex-col justify-center gap-4 rounded-md bg-neutral-800 p-4 hover:cursor-pointer hover:bg-neutral-700">
        <p className="text-2xl font-semibold text-gray-200">{course.name}</p>

        <p className="text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque ratione sit, repellat
          voluptas aliquid corporis est? Deleniti iure omnis, facilis dicta illo minus amet praesentium ipsam,
          illum, consequatur dolorum.
        </p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </ul>
      </li>
    </Link>
  )
}
