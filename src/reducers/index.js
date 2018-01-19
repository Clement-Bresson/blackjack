import {
  CALCULATE_SCORES,
  CREATE_NEW_DECK,
  DEAL_CARD_TO,
  IS_PLAYER_BUSTED,
  IS_PLAYER_STICK,
  REVEAL_DEALER_CARDS
} from './../actions/types'

import { createNewDeck, getFinalScore } from './../utils'

const intialState = {
  deck: [],
  hands: {
    dealer: []
  },
  statuses: {
    dealer: null
  }
}

const reducers = (state, action) => {
  if (typeof state === 'undefined') {
    return intialState
  }

  switch (action.type) {
    case CREATE_NEW_DECK:
      return { ...state, deck: createNewDeck(), hands: intialState.hands }

    case DEAL_CARD_TO:
      const { faceDown, player } = action
      const { hands, deck, statuses } = state
      const formerPlayerHand = hands[player] || []
      const randomCardIndex = Math.floor(Math.random() * deck.length)
      const newPlayerHand = [...formerPlayerHand, { ...deck[randomCardIndex], faceDown }]
      const updatedDeck = [...deck.slice(0, randomCardIndex), ...deck.slice(randomCardIndex + 1)]
      return {
        ...state,
        deck: updatedDeck,
        hands: {
          ...hands,
          [player]: newPlayerHand
        },
        statuses: {
          ...statuses,
          [player]: 'dealt'
        }
      }

    case IS_PLAYER_BUSTED:
      return { ...state, statuses: { ...state.statuses, [action.player]: 'busted' } }

    case IS_PLAYER_STICK:
      return { ...state, statuses: { ...state.statuses, [action.player]: 'stick' } }

    case REVEAL_DEALER_CARDS:
      return { ...state, hands: { ...state.hands, dealer: state.hands.dealer.map(card => ({ ...card, faceDown: false }) ) } }

    case CALCULATE_SCORES:
      const { dealer, ...playerHands } = state.hands
      const newStatuses = {}
      const dealerScore = getFinalScore(dealer)
      Object.keys(playerHands).forEach(player => {
        const playerScore = getFinalScore(playerHands[player])
        newStatuses[player] = playerScore > dealerScore ? 'won' : 'lost'
      })
      return { ...state, statuses: newStatuses }
    default:
      return state
  }
}

export default reducers
