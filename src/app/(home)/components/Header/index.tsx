'use client'

import { triggerCustomEvent } from '@/hooks/useEventListener/triggerCustomEvent'

export const Header = () => {
  const handleOpenModal = () => {
    triggerCustomEvent('modal-event', { action: 'open' })
  }

  return (
    <header className="w-full h-[33.33vh] bg-blue-100 flex justify-center items-center flex-col gap-2">
      <p>Header</p>
      <button onClick={handleOpenModal} className="text-blue-600">
        Navbar links
      </button>
    </header>
  )
}
