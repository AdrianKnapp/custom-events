import { ReactNode } from 'react'

import { CommonFormsData } from '@/components/common/AuthModal/types'

export type CustomEventHandler = (event: Event) => void

export interface CommonCustomEventsProps<EventName = keyof CustomEvents> {
  eventName: EventName
}

export interface CustomEvents {
  'auth-modal-event': {
    action: 'open' | 'close'
    data?: CommonFormsData
  }
  'example-action': {
    data: {
      id: string
      name: string
    }
    action: 'create' | 'update' | 'delete'
  }
  'feedback-modal': {
    action: 'open' | 'close'
    data?: {
      title?: string
      description?: ReactNode
      buttons?: {
        primary?: {
          text?: string
          callback?: () => void
        }
        secondary?: {
          text?: string
          callback?: () => void
        }
      }
    }
  }
}
