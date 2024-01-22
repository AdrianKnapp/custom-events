import { CommonFormsData } from '@/components/common/AuthModal/types'
import { triggerCustomEvent } from '@/utils/customEvents/triggerCustomEvent'

export const handleOpenAuthModal = (data?: CommonFormsData) => {
  triggerCustomEvent({
    eventName: 'auth-modal-event',
    data: {
      action: 'open',
      data
    }
  })
}
