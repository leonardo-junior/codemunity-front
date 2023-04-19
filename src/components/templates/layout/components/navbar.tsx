import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="w-full px-6 md:px-8 xl:px-12 py-6 bg-neutral-950">
      <div className="flex justify-between max-w-7xl m-auto">
        <div>
          <Link className="text-2xl font-semibold text-gray-200" href="/">
            Codemunity
          </Link>
        </div>

        <div className="flex items-end">
          <Link className="text-md font-semibold text-gray-400" href="/courses">
            Cursos
          </Link>
        </div>
      </div>
    </nav>
  )
}
