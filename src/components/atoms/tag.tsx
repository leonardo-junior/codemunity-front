type TagProps = {
  name: string
}

export const Tag = ({ name }: TagProps) => {
  return <li className="px-2 bg-slate-300 w-min rounded-sm text-gray-800">{name}</li>
}
