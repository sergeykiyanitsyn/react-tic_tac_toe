import styles from './InformationLayout.module.css'
import PropTypes from 'prop-types'

export const InformationLayout = (props) => {
  const showStatusGame = () => {
    if (props.isDraw) {
      return <div className={styles.Info}> Ничья </div>
    } else if (props.isGameEnded) {
      return (
        <div className={styles.Info}>
          {' '}
          Победитель: <span className={styles.Tomato}> {props.currentPlayer}</span>{' '}
        </div>
      )
    } else {
      return (
        <div className={styles.Info}>
          Итак, сейчас ходят:{' '}
          <span className={styles.Tomato}> {props.currentPlayer}</span>{' '}
        </div>
      )
    }
  }

  return <>{showStatusGame()}</>
}

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
}
