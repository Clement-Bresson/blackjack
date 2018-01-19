import {
  CALCULATE_SCORES,
  CREATE_NEW_DECK,
  DEAL_CARD_TO,
  IS_PLAYER_BUSTED,
  IS_PLAYER_STICK,
  REVEAL_DEALER_CARDS
} from './types'

export const createNewDeck = () => ({
  type: CREATE_NEW_DECK
})

export const dealCardTo = (player, faceDown = false) => ({
  faceDown,
  player,
  type: DEAL_CARD_TO
})

export const isBusted = player => ({
  player,
  type: IS_PLAYER_BUSTED
})

export const isStick = player => ({
  player,
  type: IS_PLAYER_STICK
})

export const revealDealerCards = () => ({
  type: REVEAL_DEALER_CARDS
})

export const calculateScores = () => ({
  type: CALCULATE_SCORES
})
