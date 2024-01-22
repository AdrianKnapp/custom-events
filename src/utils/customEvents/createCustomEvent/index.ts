import { CustomEvents } from '../types'
import { CreateCustomEventProps } from './types'

export const createCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: CreateCustomEventProps<EventName>) => {
  document.addEventListener(eventName, handler)
}
