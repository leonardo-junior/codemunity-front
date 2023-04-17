type OverlayProps = {
  children: React.ReactNode
}

export const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  )
}
