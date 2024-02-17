import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types'

const handleClick = ({ target }) => {
  console.log(target.id)
}

export const FieldLayout = (props) => {
  return (
    <div className={styles.fieldBox}>
      {props.field.map((id, index) => {
        return (
          <button
            id={index}
            key={index}
            className={styles.cell}
            onClick={(btn) => handleClick(btn)}
          >
            {id}
          </button>
        )
      })}
    </div>
  )
}

FieldLayout.propTypes = {
  field: PropTypes.array,
  setCurrentPlayer: PropTypes.bool,
  setIsDraw: PropTypes.bool,
  setIsGameEnded: PropTypes.bool,
}
