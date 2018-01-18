import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createNewDeck, dealCardTo } from '../../../../actions'

const mapStateToProps = state => ({
  deck: state.deck,
  hands: state.hands
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createNewDeck,
  dealCardTo
}, dispatch)

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
