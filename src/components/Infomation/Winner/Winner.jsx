import styles from '../InformationLayout.module.css'
import PropTypes from 'prop-types'
import { store } from '../../store'

export const Winner = () => {
  const { currentPlayer } = store.getState()
  const winner = !currentPlayer

  let stylesPlayer = ''
  if (winner) {
    stylesPlayer = styles.tomato
  } else {
    stylesPlayer = styles.blue
  }

  return (
    <div className={styles.info}>
      {' '}
      Победитель: <span className={stylesPlayer}>
        {' '}
        {winner ? 'Крестики' : 'Нолики'}
      </span>{' '}
    </div>
  )
}

Winner.propTypes = {
  currentPlayer: PropTypes.bool,
}
