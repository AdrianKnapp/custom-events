'use client'

import { Modal } from '@/components/ui/Modal'
import { useState } from 'react'

export const FeedbackModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3>This is a feedback modal</h3>
      <p>Modal</p>
    </Modal>
  )
}
