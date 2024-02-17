import styles from './Game.module.css'
import { Information } from './components/Infomation/Information'
import { Field } from './components/Field/Field '
import { Restart } from './components/Restart/Restart'
import PropTypes from 'prop-types'

export const GameLayout = (props) => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.gameBoard}>
          <Information
            isDraw={props.isDraw}
            isGameEnded={props.isGameEnded}
            currentPlayer={props.currentPlayer}
          />
          <Field
            field={props.field}
            setIsGameEnded={props.setIsGameEnded}
            setIsDraw={props.setIsDraw}
            setCurrentPlayer={props.setCurrentPlayer}
          />
          <Restart />
        </div>
      </div>
    </>
  )
}

GameLayout.propTypes = {
  field: PropTypes.object,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.bool,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.bool,
}
