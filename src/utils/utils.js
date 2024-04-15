export const checkStatusGame = (WIN_PATTERNS, field, currentPlayer) => {
  const indexesPlayer = field.reduce((acc, player, index) => {
    if (player === currentPlayer) {
      acc.push(index)
    }
    return acc
  }, [])

  const isWinner = WIN_PATTERNS.some((winSet) =>
    winSet.every((winNum) => indexesPlayer.includes(winNum)),
  )

  if (isWinner) return true
  if (!field.includes('')) return false

  return null
}
