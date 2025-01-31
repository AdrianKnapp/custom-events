import { CustomEvents } from './customEvents'

export type CustomEventHandler = (
  event: CustomEvent<CustomEvents[keyof CustomEvents]>
) => void

export interface CommonCustomEventsProps<EventName = keyof CustomEvents> {
  eventName: EventName
}
