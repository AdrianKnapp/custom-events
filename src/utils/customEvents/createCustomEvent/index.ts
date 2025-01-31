import { CreateCustomEventProps } from '@/types/customEvents/createCustomEvent'
import { CustomEvents } from '@/types/customEvents/customEvents'

export const createCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: CreateCustomEventProps<EventName>) => {
  document.addEventListener(eventName, handler)
}
