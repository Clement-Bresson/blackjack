export const createNewDeck = () => {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const suits = ['diamond', 'heart', 'spade', 'club']
  const deck = []
  values.forEach(value => {
    suits.forEach(suit => {
      deck.push({ value, suit })
    })
  })
  return deck
}

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export const computePossibleScores = cards => {
  let possibleScores = [0]
  cards.forEach(({ faceDown, value }) => {
    if (faceDown) {
      return
    }
    if (value === '1') {
      possibleScores = [
        ...possibleScores.map(score => score + 1),
        ...possibleScores.map(score => score + 11)
      ]
      return
    }
    const numericValue = ['J', 'Q', 'K'].includes(value) ? 10 : parseInt(value, 10)
    possibleScores = possibleScores.map(score => score + numericValue)
  })
  return possibleScores.includes(21) ? [21] : possibleScores
}

export const visibleCards = hand => hand.filter(card => card.faceDown === false).length

export const getFinalScore = hand => {
  return Math.max(...computePossibleScores(hand).filter(score => score <= 21))
}

export const getAllScores = hands => {
  const scores = {}
  const { dealer, ...playerHands } = hands
  scores.dealer = getFinalScore(dealer)
  Object.keys(playerHands).forEach(player => {
    scores[player] = getFinalScore(playerHands[player])
  })
  return scores
}
