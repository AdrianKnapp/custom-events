export interface CustomEvents {
  'feedback-modal': {
    action: 'open' | 'close'
    data: {
      feedback: string
    }
  }
}
