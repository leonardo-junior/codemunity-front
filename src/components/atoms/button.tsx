type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-max rounded-md bg-neutral-600 px-8 py-2 text-gray-200 hover:bg-neutral-500 ${props.className}`}
    >
      {children}
    </button>
  )
}
