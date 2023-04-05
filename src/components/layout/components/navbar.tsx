import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="p-6 bg-gray-950  shadow-sm shadow-gray-50">
      <div>
        <Link className="text-2xl font-semibold text-gray-300" href="/">
          Codemunity
        </Link>
      </div>
    </nav>
  )
}
