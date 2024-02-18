import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types'
import { Zero, Cross } from './assets/pictures'
import { paintOnclickCell, handleClick } from './hoocks/hoocks'

export const FieldLayout = (props) => {
  return (
    <div className={styles.fieldBox}>
      {props.field.map((player, index) => {
        return (
          <button
            id={index}
            key={index}
            className={paintOnclickCell(player)}
            onClick={(btn) =>
              handleClick(
                btn,
                props.field,
                props.currentPlayer,
                props.setCurrentPlayer,
                props.setIsGameEnded,
                props.setIsDraw,
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
}
