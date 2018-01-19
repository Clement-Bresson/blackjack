import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  calculateScores,
  createNewDeck,
  dealCardTo,
  revealDealerCards,
} from '../../../../../../actions'
import { getAllScores } from '../../../../../../utils'

const mapStateToProps = state => ({
  hands: state.hands,
  scores: Object.keys(state.hands).length > 0 ? getAllScores(state.hands) : {},
  statuses: state.statuses
})

const mapDispatchToProps = dispatch => bindActionCreators({
  calculateScores,
  createNewDeck,
  dealCardTo,
  revealDealerCards
}, dispatch)

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
