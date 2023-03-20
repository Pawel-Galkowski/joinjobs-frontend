export interface AlertData {
  id: number
  msg: string
  alertType: string
  timeout?: number
}

export interface Props {
  alerts: AlertData[]
}
