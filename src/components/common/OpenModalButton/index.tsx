'use client'

import { Button } from '@/components/ui/Button'
import { triggerCustomEvent } from '@/hooks/useEventListener/triggerCustomEvent'

export const OpenModalButton = () => {
  const handleOnClick = () => {
    triggerCustomEvent('modal-event', {
      action: 'open',
      data: {
        message: 'Hello, world!'
      }
    })
  }

  return <Button onClick={handleOnClick}>Open Modal</Button>
}
