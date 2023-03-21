import { connect } from 'react-redux'
import { type AlertData, type Props } from './types'

const Alert: React.FC<Props> = ({ alerts }): any =>
  alerts?.length &&
  alerts.map((alert: AlertData) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ))

const mapStateToProps = ({ alert }: any) => ({ alerts: alert })

export default connect(mapStateToProps)(Alert)
