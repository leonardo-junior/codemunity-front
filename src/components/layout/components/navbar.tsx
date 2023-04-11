import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 py-6 bg-neutral-950">
      <div>
        <Link className="text-2xl font-semibold text-gray-200" href="/">
          Codemunity
        </Link>
      </div>

      <div className="flex items-end">
        <Link className="text-md font-semibold text-gray-400" href="/create">
          Create
        </Link>
      </div>
    </nav>
  )
}
