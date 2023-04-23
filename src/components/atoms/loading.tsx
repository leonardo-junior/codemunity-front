export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-200" />
    </div>
  )
}
