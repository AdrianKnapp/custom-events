import { triggerCustomEvent } from '../../customEvents/triggerCustomEvent'
import { CustomEvents } from '../../customEvents/types'

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
