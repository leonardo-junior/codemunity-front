import { Button } from 'components/atoms/button'
import { Overlay } from 'components/atoms/overlay'
import { ImCross } from 'react-icons/im'

type ModalProps = {
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <Overlay>
      <div className="flex w-96 flex-col gap-4 rounded-md bg-neutral-600 px-6 py-4">
        <Button className="ml-auto px-3" onClick={onClose}>
          <ImCross />
        </Button>

        {children}
      </div>
    </Overlay>
  )
}
