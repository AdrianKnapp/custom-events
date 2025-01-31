import { PropsWithChildren } from 'react'

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
