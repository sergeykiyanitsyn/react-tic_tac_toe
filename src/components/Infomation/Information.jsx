import { Draw } from './Draw'
import { Winner } from './Winner'
import { GameStatus } from './GameStatus'
import { checkWiner } from './hoocks/hoocks'
import PropTypes from 'prop-types'
import { store } from '../store'

export const Information = () => {
  const { statusGame } = store.getState()
  const gameOver = checkWiner()

  console.log('statusGame', statusGame)
  console.log('gameOver', gameOver)

  if (statusGame !== gameOver) {
    // const unsubscribe = store.subscribe(() => {
    //   console.log('State CHANGE_STATUS_GAME', store.getState())
    // })
    store.dispatch({ type: 'CHANGE_STATUS_GAME', payload: statusGame })
    // unsubscribe()
  }

  return (
    <>
      {statusGame === null && <GameStatus />}
      {statusGame === false && <Draw />}
      {statusGame === true && <Winner />}
    </>
  )
}

Information.propTypes = {
  field: PropTypes.array,
  statusGame: PropTypes.any,
  setStatusGame: PropTypes.func,
  currentPlayer: PropTypes.bool,
}
