import styles from '../FieldLayout.module.css'
import { store } from '../../store'

export const paintOnclickCell = (player) => {
  switch (player) {
    case false:
      return `${styles.cell} ${styles.zero}`
    case true:
      return `${styles.cell} ${styles.cross}`
    default:
      return styles.cell
  }
}

export const handleClick = (btn) => {
  const { target } = btn
  const { field, currentPlayer } = store.getState()

  const newField = [...field]
  const fieldCurrentCell = newField[target.id]

  if (fieldCurrentCell === '') {
    newField[target.id] = currentPlayer
    // console.log(newField)
    // const unsubscribePaintCell = store.subscribe(() => {
    //   console.log('State PAINT_CELL', store.getState())
    // })
    store.dispatch({ type: 'PAINT_CELL', payload: newField })
    // unsubscribePaintCell()

    store.dispatch({ type: 'CHANGE_PLAYER', payload: !currentPlayer })
  }
}
