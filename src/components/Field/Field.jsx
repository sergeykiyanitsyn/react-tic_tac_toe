import xPic from './assets/X.png'
import oPic from './assets/O.png'
import { store } from '../../store'
import styles from './Field.module.css'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

const handleClick = (btn) => {
  const { target } = btn
  if (target.children.length || target.tagName === 'IMG') return
  const { field, currentPlayer } = store.getState()
  field[target.id] = currentPlayer
  store.dispatch({ type: 'PAINT_CELL', payload: [...field] })
  store.dispatch({ type: 'CHANGE_PLAYER', payload: currentPlayer })
}

export const Field = () => {
  const { field, statusGame } = store.getState()
  return (
    <div className={styles.fieldBox}>
      {field.map((player, indx) => {
        const currPic = player ? xPic : oPic
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
            {player !== '' && player !== '' && (
              <img src={currPic} alt="cross" width={player ? 100 : 50} />
            )}
          </button>
        )
      })}
    </div>
  )
}
