import { WIN_PATTERNS } from '../Data/statusData'
import { store } from '../../store'

const checkStatusGame = (isWinnerCrosses, isWinnerZeros, isDraw) => {
  if (isWinnerCrosses || isWinnerZeros) {
    return true
  } else if (isDraw) {
    return false
  } else {
    return null
  }
}

export const checkWiner = () => {
  const { field } = store.getState()

  const indexesCrosses = findAllIndexec(field, true)
  const indexesZeros = findAllIndexec(field, false)

  const isWinnerCrosses = findWinner(WIN_PATTERNS, indexesCrosses)
  const isWinnerZeros = findWinner(WIN_PATTERNS, indexesZeros)

  const isDraw = !field.includes('')

  const statusGame = checkStatusGame(isWinnerCrosses, isWinnerZeros, isDraw)

  return statusGame
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
