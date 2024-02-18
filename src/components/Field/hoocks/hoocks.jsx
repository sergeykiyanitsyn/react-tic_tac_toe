import styles from '../FieldLayout.module.css'
import { WIN_PATTERNS } from './Data/statucData'
import { checkStatusGame } from '../Field '

export const paintOnclickCell = (player) => {
  if (player === 'Нолики') {
    return `${styles.cell} ${styles.zero}`
  } else if (player === 'Крестики') {
    return `${styles.cell} ${styles.cross}`
  } else {
    return styles.cell
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

export const handleClick = (
  { target },
  field,
  currentPlayer,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
) => {
  const fieldCurrentCell = field[target.id]
  if (fieldCurrentCell === '') {
    field[target.id] = currentPlayer
    checkWiner(field, setIsGameEnded, currentPlayer, setCurrentPlayer, setIsDraw)
  }
}

const checkWiner = (
  field,
  setIsGameEnded,
  currentPlayer,
  setCurrentPlayer,
  setIsDraw,
) => {
  const indexesCrosses = findAllIndexec(field, 'Крестики')
  const indexesZeros = findAllIndexec(field, 'Нолики')

  const isWinnerCrosses = findWinner(WIN_PATTERNS, indexesCrosses)
  const isWinnerZeros = findWinner(WIN_PATTERNS, indexesZeros)

  const isDrawGame = !field.includes('')

  checkStatusGame(
    isWinnerCrosses,
    isWinnerZeros,
    isDrawGame,
    currentPlayer,
    setIsGameEnded,
    setIsDraw,
    setCurrentPlayer,
  )
}
