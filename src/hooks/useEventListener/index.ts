import { useEffect } from 'react'

import { createCustomEvent } from '@/utils/customEvents/createCustomEvent'
import { deleteCustomEvent } from '@/utils/customEvents/deleteCustomEvent'

import { UseEventListenerProps } from './types'
import { CustomEvents } from '@/types/customEvents/customEvents'

export const useEventListener = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: UseEventListenerProps<EventName>) => {
  useEffect(() => {
    createCustomEvent({
      eventName,
      handler
    })

    return () => {
      deleteCustomEvent({
        eventName,
        handler
      })
    }
  }, [eventName, handler])
}
