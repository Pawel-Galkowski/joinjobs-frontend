interface SpinnerTypes {
  small?: boolean
}

const Spinner: React.FC<SpinnerTypes> = ({ small }) => (
  <img
    src='/images/spinner.gif'
    style={{ width: small ? '40px' : '200px', margin: 'auto', display: 'block' }}
    alt='Loading...'
  />
)

export default Spinner
