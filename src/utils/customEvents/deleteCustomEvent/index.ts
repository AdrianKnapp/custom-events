import { CustomEvents } from '../types'
import { DeleteCustomEventProps } from './types'

export const deleteCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: DeleteCustomEventProps<EventName>) => {
  document.removeEventListener(eventName, handler)
}
