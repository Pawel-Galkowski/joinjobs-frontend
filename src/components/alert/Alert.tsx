import { type AlertData } from './types'

// TODO: take alertData from store

const Alert = (): JSX.Element => {
  const alerts: AlertData[] = []
  if (!alerts?.length) {
    return <></>
  }

  return (
    <>
      {alerts.map((alert: AlertData) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </>
  )
}

export default Alert
