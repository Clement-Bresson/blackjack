import { connect } from 'react-redux'

const mapStateToProps = state => ({
  deck: state.deck,
  hands: state.hands,
  statuses: state.statuses
})

export default WrappedComponent => connect(mapStateToProps)(WrappedComponent)
