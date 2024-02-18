import { RestartLayout } from './RestartLayout'
import PropTypes from 'prop-types'

const restart = (field, setIsGameEnded, setIsDraw, setCurrentPlayer, currentPlayer) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  nums.map((num, index) => {
    field[index] = ''
  })
  if (currentPlayer === 'Нолики') {
    setCurrentPlayer('Крестики')
  } else {
    setCurrentPlayer('Нолики')
  }
  setIsGameEnded(false)
  setIsDraw(false)
}

export const Restart = ({
  field,
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
  currentPlayer,
}) => {
  return (
    <RestartLayout
      field={field}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
      setCurrentPlayer={setCurrentPlayer}
      currentPlayer={currentPlayer}
      restart={restart}
    />
  )
}

Restart.propTypes = {
  field: PropTypes.array,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  currentPlayer: PropTypes.string,
}
