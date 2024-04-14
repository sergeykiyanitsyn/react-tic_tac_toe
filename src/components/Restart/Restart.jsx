import PropTypes from 'prop-types'
import styles from './RestartLayout.module.css'
import { store } from '../store'

const restart = () => {
  store.dispatch({ type: 'RESTART' })
}

export const Restart = () => {
  return (
    <>
      <button className={styles.restart} onClick={restart}>
        {' '}
        Начать заново{' '}
      </button>
    </>
  )
}

Restart.propTypes = {
  field: PropTypes.array,
  setCurrentPlayer: PropTypes.func,
  setStatusGame: PropTypes.func,
}
