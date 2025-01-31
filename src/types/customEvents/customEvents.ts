export interface CustomEvents {
  'auth-modal-event': {
    action: 'open' | 'close'
    data?: {
      email?: string
      initialStep?: 'CustomSteps'
      redirectUrl?: string
      redirect?: boolean
    }
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
    data: {
      feedback: string
    }
  }
}
