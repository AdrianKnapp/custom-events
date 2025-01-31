import { CustomEvents } from '@/types/customEvents/customEvents'

interface HandlerProp<EventName extends keyof CustomEvents> extends Event {
  detail: CustomEvents[EventName]
}

export interface UseEventListenerProps<EventName extends keyof CustomEvents> {
  eventName: EventName
  handler: (event: HandlerProp<EventName>) => void
}
