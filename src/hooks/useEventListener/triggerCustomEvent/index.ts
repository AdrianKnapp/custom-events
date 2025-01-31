import { CustomEvents } from '../events'

export const triggerCustomEvent = <EventName extends keyof CustomEvents>(
  eventName: EventName,
  data: CustomEvents[EventName]
) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
