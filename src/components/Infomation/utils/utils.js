export const checkStatusGame = (isWinnerCrosses, isWinnerZeros, isDraw) => {
  if (isWinnerCrosses || isWinnerZeros) {
    return true
  } else if (isDraw) {
    return false
  } else {
    return null
  }
}

export const findAllIndexec = (field, currentPlayer) => {
  return field.reduce((acc, player, index) => {
    if (player === currentPlayer) {
      acc.push(index)
    }
    return acc
  }, [])
}

export const findWinner = (WIN_PATTERNS, indexesPlayer) => {
  return WIN_PATTERNS.some((winSet) =>
    winSet.every((winNum) => indexesPlayer.includes(winNum)),
  )
}
