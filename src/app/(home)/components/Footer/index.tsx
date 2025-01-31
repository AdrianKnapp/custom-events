'use client'

import { triggerCustomEvent } from '@/hooks/useEventListener/triggerCustomEvent'

export const Footer = () => {
  const handleOpenModal = () => {
    triggerCustomEvent('modal-event', { action: 'open' })
  }

  return (
    <footer className="w-full h-[33.33vh] bg-green-100 flex justify-center items-center flex-col gap-2">
      <p>Footer</p>
      <button onClick={handleOpenModal} className="text-blue-600">
        More details
      </button>
    </footer>
  )
}
