import { CustomEvents } from '../types'
import { TriggerCustomEventProps } from './types'

export const triggerCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  data
}: TriggerCustomEventProps<EventName>) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
