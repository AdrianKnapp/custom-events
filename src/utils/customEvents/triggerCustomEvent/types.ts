import { CommonCustomEventsProps, CustomEvents } from '../types'

export interface TriggerCustomEventProps<EventName extends keyof CustomEvents>
  extends CommonCustomEventsProps<EventName> {
  data: CustomEvents[EventName]
}
