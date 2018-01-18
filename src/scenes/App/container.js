import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { passTest } from '../../actions'

const mapStateToProps = state => ({
  testPassed: state.testPassed
})

const mapDispatchToProps = dispatch => bindActionCreators({
  passTest
}, dispatch)

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
