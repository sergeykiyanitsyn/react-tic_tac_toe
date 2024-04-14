import { findAllIndexec, findWinner, checkStatusGame } from './utils/utils'
import { WIN_PATTERNS } from './consts/WIN_PATTERNS'
import { store } from '../store'
import styles from './Info.module.css'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

export const Info = () => {
  const { field, statusGame, currentPlayer } = store.getState()

  const indexesCrosses = findAllIndexec(field, true)
  const indexesZeros = findAllIndexec(field, false)

  const isWinnerCrosses = findWinner(WIN_PATTERNS, indexesCrosses)
  const isWinnerZeros = findWinner(WIN_PATTERNS, indexesZeros)

  const isDraw = !field.includes('')

  // isGameOver: true = Win | false = Draw | null = GameContinues
  const isGameOver = checkStatusGame(isWinnerCrosses, isWinnerZeros, isDraw)

  if (statusGame !== isGameOver) {
    store.dispatch({ type: 'CHANGE_STATUS_GAME', payload: isGameOver })
  }

  return (
    <div className={styles.info}>
      {statusGame === null && (
        <>
          {'Итак, сейчас ходят:'} <br />
          <span className={currentPlayer ? styles.tomato : styles.blue}>
            {currentPlayer ? 'Крестики' : 'Нолики'}
          </span>
        </>
      )}
      {statusGame === false && 'Ничья'}
      {statusGame === true && (
        <>
          {'Победитель:'} <br />
          <span className={!currentPlayer ? styles.tomato : styles.blue}>
            {!currentPlayer ? 'Крестики' : 'Нолики'}
          </span>
        </>
      )}
    </div>
  )
}
