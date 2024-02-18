import styles from './RestartLayout.module.css'
import PropTypes from 'prop-types'

export const RestartLayout = ({
  field,
  setIsGameEnded,
  setIsDraw,
  setCurrentPlayer,
  currentPlayer,
  restart,
}) => {
  return (
    <>
      <button
        className={styles.restart}
        onClick={() =>
          restart(field, setIsGameEnded, setIsDraw, setCurrentPlayer, currentPlayer)
        }
      >
        {' '}
        Начать заново{' '}
      </button>
    </>
  )
}

RestartLayout.propTypes = {
  field: PropTypes.array,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  currentPlayer: PropTypes.string,
  restart: PropTypes.func,
}
