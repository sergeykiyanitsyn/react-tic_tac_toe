import styles from '../InformationLayout.module.css'
import PropTypes from 'prop-types'
import { store } from '../../store'

export const GameStatus = () => {
  const { currentPlayer } = store.getState()

  let stylesPlayer = ''
  if (currentPlayer) {
    stylesPlayer = styles.tomato
  } else {
    stylesPlayer = styles.blue
  }

  return (
    <div className={styles.info}>
      Итак, сейчас ходят:{' '}
      <span className={stylesPlayer}> {currentPlayer ? 'Крестики' : 'Нолики'}</span>{' '}
    </div>
  )
}

GameStatus.propTypes = {
  currentPlayer: PropTypes.bool,
}
