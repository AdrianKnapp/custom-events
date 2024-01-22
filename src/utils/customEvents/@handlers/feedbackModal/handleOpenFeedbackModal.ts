import { CustomEvents } from '@/types/customEvents/customEvents'
import { triggerCustomEvent } from '../../triggerCustomEvent'

export const handleOpenFeedbackModal = (
  data: CustomEvents['feedback-modal']['data']
) => {
  triggerCustomEvent({
    eventName: 'feedback-modal',
    data: {
      action: 'open',
      data
    }
  })
}
