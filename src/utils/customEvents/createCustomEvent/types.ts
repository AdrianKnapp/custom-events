import {
  CommonCustomEventsProps,
  CustomEventHandler,
  CustomEvents
} from '../types'

export interface CreateCustomEventProps<EventName extends keyof CustomEvents>
  extends CommonCustomEventsProps<EventName> {
  handler: CustomEventHandler
}
