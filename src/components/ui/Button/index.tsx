import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-white px-4 py-2 rounded-sm cursor-pointer hover:bg-neutral-100 duration-200"
      {...props}
    >
      {children}
    </button>
  )
}
