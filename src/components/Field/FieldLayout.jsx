import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types'
import { Zero, Cross } from './assets/pictures'
import { paintOnclickCell, handleClick } from './hoocks/hoocks'

export const FieldLayout = ({
  field,
  currentPlayer,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
  checkStatusGame,
}) => {
  return (
    <div className={styles.fieldBox}>
      {field.map((player, index) => {
        return (
          <button
            id={index}
            key={index}
            className={paintOnclickCell(player)}
            onClick={(btn) =>
              handleClick(
                btn,
                field,
                currentPlayer,
                setCurrentPlayer,
                setIsGameEnded,
                setIsDraw,
                checkStatusGame,
              )
            }
          >
            {player === 'Нолики' ? <Zero /> : ''}
            {player === 'Крестики' ? <Cross /> : ''}
          </button>
        )
      })}
    </div>
  )
}

FieldLayout.propTypes = {
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  checkStatusGame: PropTypes.func,
}
