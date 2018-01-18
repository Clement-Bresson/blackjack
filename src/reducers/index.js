import {
  CREATE_NEW_DECK,
  DEAL_CARD_TO
} from './../actions/types'

import { createNewDeck } from './../utils'

const intialState = {
  deck: [],
  hands: {
    dealer: []
  }
}

const reducers = (state, action) => {
  if (typeof state === 'undefined') {
    return intialState
  }

  switch (action.type) {
    case CREATE_NEW_DECK:
      return { ...state, deck: createNewDeck() }

    case DEAL_CARD_TO:
      const { faceDown, player } = action
      const { hands, deck } = state
      const formerPlayerHand = hands[player] || []
      const randomCardIndex = Math.floor(Math.random() * deck.length)
      const newPlayerHand = [...formerPlayerHand, { ...deck[randomCardIndex], faceDown }]
      const newDeck = [...deck.slice(0, randomCardIndex), ...deck.slice(randomCardIndex + 1)]
      return {
        ...state,
        deck: newDeck,
        hands: {
          ...hands,
          [player]: newPlayerHand
        }
      }
    default:
      return state
  }
}

export default reducers
