type TagProps = {
  name: string
}

export const Tag = ({ name }: TagProps) => {
  return <li className="w-min rounded-sm bg-slate-300 px-2 text-gray-800">{name}</li>
}
