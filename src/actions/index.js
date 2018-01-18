import {
  CREATE_NEW_DECK,
  DEAL_CARD_TO
} from './types'

export const createNewDeck = () => ({
  type: CREATE_NEW_DECK
})

export const dealCardTo = (player, faceDown = false) => ({
  faceDown,
  player,
  type: DEAL_CARD_TO
})
