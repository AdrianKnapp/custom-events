export interface CustomEvents {
  'modal-event': {
    action: 'open' | 'close'
    data: {
      message: string
    }
  }
}
