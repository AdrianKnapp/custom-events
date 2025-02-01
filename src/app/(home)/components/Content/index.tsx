'use client'

import { triggerCustomEvent } from '@/hooks/useEventListener/triggerCustomEvent'

export const Content = () => {
  const handleOpenModal = () => {
    triggerCustomEvent('modal-event', { action: 'open' })
  }

  return (
    <main className="w-full h-[33.33vh] bg-red-100 flex justify-center items-center flex-col gap-2">
      <p>Content</p>
      <p className="max-w-md text-slate-600 px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <button
          onClick={handleOpenModal}
          className="text-blue-600 cursor-pointer"
        >
          Open modal
        </button>{' '}
        ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </main>
  )
}
