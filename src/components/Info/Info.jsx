import { checkStatusGame } from '../../utils/utils'
import { WIN_PATTERNS } from '../../consts/consts'
import { store } from '../../store'
import styles from './Info.module.css'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

export const Info = () => {
  const { field, statusGame, currentPlayer } = store.getState()

  // isGameOver: true = Win | false = Draw | null = GameContinues
  const isGameOver = checkStatusGame(WIN_PATTERNS, field, !currentPlayer)

  if (isGameOver !== null) {
    store.dispatch({ type: 'CHANGE_STATUS_GAME', payload: isGameOver })
  }

  console.log('isGameOver', isGameOver)
  console.log('statusGame', statusGame)

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
