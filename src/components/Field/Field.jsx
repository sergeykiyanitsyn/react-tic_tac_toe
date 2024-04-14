import styles from './FieldLayout.module.css'
import { Zero, Cross } from './assets/pictures'
import { paintOnclickCell, handleClick } from './hoocks/hoocks'
import PropTypes from 'prop-types'
import { store } from '../store'

export const Field = () => {
  const { field, statusGame } = store.getState()
  return (
    <div className={styles.fieldBox}>
      {field.map((player, indx) => {
        return (
          <button
            disabled={statusGame !== null}
            id={indx}
            key={indx}
            className={paintOnclickCell(player)}
            onClick={(btn) => handleClick(btn)}
          >
            {player === true ? <Cross /> : ''}
            {player === false ? <Zero /> : ''}
          </button>
        )
      })}
    </div>
  )
}

Field.propTypes = {
  field: PropTypes.array,
  currentPlayer: PropTypes.bool,
  setCurrentPlayer: PropTypes.func,
  statusGame: PropTypes.any,
}
