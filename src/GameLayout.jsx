import styles from './Game.module.css'
import { Information } from './components/Infomation/Information'
import { Field } from './components/Field/Field'
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
            currentPlayer={props.currentPlayer}
            setIsGameEnded={props.setIsGameEnded}
            setIsDraw={props.setIsDraw}
            setCurrentPlayer={props.setCurrentPlayer}
          />
          <Restart
            field={props.field}
            setIsGameEnded={props.setIsGameEnded}
            setIsDraw={props.setIsDraw}
            setCurrentPlayer={props.setCurrentPlayer}
            currentPlayer={props.currentPlayer}
          />
        </div>
      </div>
    </>
  )
}

GameLayout.propTypes = {
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
}
