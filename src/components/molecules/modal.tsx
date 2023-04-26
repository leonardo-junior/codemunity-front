import { Button } from 'components/atoms/button'
import { Overlay } from 'components/atoms/overlay'
import { ImCross } from 'react-icons/im'

type ModalProps = {
  onClose: () => void
  children: React.ReactNode
  size?: 'md' | 'lg'
}

export const Modal = ({ onClose, size = 'md', children }: ModalProps) => {
  return (
    <Overlay>
      <div
        className={`flex max-h-[80vh] ${
          size === 'md' ? 'w-[30rem]' : 'w-[40rem]'
        } flex-col gap-4 overflow-hidden rounded-md bg-neutral-600 p-4`}
      >
        <Button className="ml-auto" isIcon onClick={onClose}>
          <ImCross />
        </Button>

        <div className="h-full overflow-auto">{children}</div>
      </div>
    </Overlay>
  )
}
