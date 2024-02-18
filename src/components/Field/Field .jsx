import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types'

export const Field = ({
  field,
  currentPlayer,
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
}) => {
  const checkStatusGame = (
    isWinnerCrosses,
    isWinnerZeros,
    isDrawGame,
    currentPlayer,
    setIsGameEnded,
    setIsDraw,
    setCurrentPlayer,
  ) => {
    if (isWinnerCrosses || isWinnerZeros) {
      setIsGameEnded(true)
    } else if (isDrawGame) {
      setIsDraw(true)
    } else {
      currentPlayer === 'Крестики'
        ? setCurrentPlayer('Нолики')
        : setCurrentPlayer('Крестики')
    }
  }

  return (
    <>
      <FieldLayout
        field={field}
        currentPlayer={currentPlayer}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        setCurrentPlayer={setCurrentPlayer}
        checkStatusGame={checkStatusGame}
      />
    </>
  )
}

Field.propTypes = {
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  checkStatusGame: PropTypes.func,
}
