import { CustomEvents } from '@/types/customEvents/customEvents'
import { triggerCustomEvent } from '../../triggerCustomEvent'

export const handleCloseFeedbackModal = (
  data?: CustomEvents['feedback-modal']['data']
) => {
  triggerCustomEvent({
    eventName: 'feedback-modal',
    data: {
      action: 'close',
      data
    }
  })
}
