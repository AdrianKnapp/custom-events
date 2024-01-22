import {
  CommonCustomEventsProps,
  CustomEventHandler,
  CustomEvents
} from '../types'

export interface DeleteCustomEventProps<EventName extends keyof CustomEvents>
  extends CommonCustomEventsProps<EventName> {
  handler: CustomEventHandler
}