import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { dealCardTo, isStick } from '../../../../../../../../actions'

const mapDispatchToProps = dispatch => bindActionCreators({
  dealCardTo,
  isStick
}, dispatch)

export default WrappedComponent => connect(null, mapDispatchToProps)(WrappedComponent)
