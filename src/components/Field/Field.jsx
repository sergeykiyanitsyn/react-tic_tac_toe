import styles from './Field.module.css'
import { PUCTURE_O, PICTURE_X } from './assets/assetsLinks'
import { store } from '../store'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

const handleClick = (btn) => {
  const { target } = btn
  const { field, currentPlayer } = store.getState()

  const newField = [...field]
  const fieldCurrentCell = newField[target.id]

  if (fieldCurrentCell === '') {
    newField[target.id] = currentPlayer
    store.dispatch({ type: 'PAINT_CELL', payload: newField })
    store.dispatch({ type: 'CHANGE_PLAYER', payload: currentPlayer })
  }
}

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
            className={`${styles.cell} ${
              player !== '' && (player ? styles.cross : styles.zero)
            }`}
            onClick={(btn) => handleClick(btn)}
          >
            {player !== '' &&
              (player ? (
                <img src={PICTURE_X} alt="cross" width={100} />
              ) : (
                <img src={PUCTURE_O} alt="zero" width={50} />
              ))}
          </button>
        )
      })}
    </div>
  )
}
