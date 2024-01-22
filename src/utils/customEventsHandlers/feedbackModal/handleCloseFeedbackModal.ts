import { triggerCustomEvent } from '../../customEvents/triggerCustomEvent'
import { CustomEvents } from '../../customEvents/types'

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
