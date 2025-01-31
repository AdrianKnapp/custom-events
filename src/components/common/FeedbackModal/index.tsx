'use client'

import { Modal } from '@/components/ui/Modal'
import { useEventListener } from '@/hooks/useEventListener'
import { useState } from 'react'

export const FeedbackModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEventListener('modal-event', ({ action }) => {
    switch (action) {
      case 'open':
        setIsOpen(true)
        break
      case 'close':
        setIsOpen(false)
        break
    }
  })

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-4">
        <h3 className="text-center">This is a feedback modal</h3>
      </div>
    </Modal>
  )
}
