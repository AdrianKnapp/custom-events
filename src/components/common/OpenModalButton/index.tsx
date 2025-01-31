'use client'

import { Button } from '@/components/ui/Button'
import { triggerCustomEvent } from '@/utils/customEvents/triggerCustomEvent'

export const OpenModalButton = () => {
  const handleOnClick = () => {
    triggerCustomEvent({
      eventName: 'feedback-modal',
      data: {
        action: 'open',
        data: {
          feedback: 'This is a feedback message'
        }
      }
    })
  }

  return <Button onClick={handleOnClick}>Open Modal</Button>
}
