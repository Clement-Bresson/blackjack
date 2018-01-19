import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isBusted } from '../../../../../../actions'

const mapDispatchToProps = dispatch => bindActionCreators({
  isBusted
}, dispatch)

export default WrappedComponent => connect(null, mapDispatchToProps)(WrappedComponent)
