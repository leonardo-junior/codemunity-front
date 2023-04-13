import { CourseSection } from 'api/types'
import Link from 'next/link'
import { useState } from 'react'

type SectionProps = {
  section: CourseSection
}

export const Section = ({ section }: SectionProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  function toggleDropDown(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    event.stopPropagation()

    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <li
      className="bg-slate-800 rounded-md flex flex-col items-center justify-center px-6 py-4 hover:bg-slate-600 hover:cursor-pointer"
      onClick={(event) => toggleDropDown(event)}
    >
      <div className="flex items-center gap-4">
        <h2 className="text-xl text-gray-300 font-semibold">{section.name}</h2>

        <span className="text-xs text-gray-200">{section.classes.length}</span>
      </div>

      <div className={`bg-slate-500 none ${isDropDownOpen ? 'flex' : 'hidden'}`}>
        {section.classes?.map((item) => (
          <Link
            key={item.id}
            href={`/class/${item.id}`}
            className="text-gray-200"
            onClick={(event) => event.stopPropagation()}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </li>
  )
}
