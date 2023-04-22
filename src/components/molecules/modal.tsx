import { Overlay } from 'components/atoms/overlay'

type ModalProps = {
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <Overlay>
      <div className="flex w-96 flex-col gap-4 rounded-md bg-neutral-600 px-6 py-4">
        {children}

        <button className="text-gray-300" onClick={onClose}>
          Fechar
        </button>
      </div>
    </Overlay>
  )
}
