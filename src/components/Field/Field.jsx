import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types'

export const Field = ({
  field,
  currentPlayer,
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
  checkStatusGame,
}) => {
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
