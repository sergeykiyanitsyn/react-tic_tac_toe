import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types'

export const Field = (props) => {
  return (
    <>
      <FieldLayout
        field={props.field}
        setIsGameEnded={props.setIsGameEnded}
        setIsDraw={props.setIsDraw}
        setCurrentPlayer={props.setCurrentPlayer}
      />
    </>
  )
}

Field.propTypes = {
  field: PropTypes.object,
  setCurrentPlayer: PropTypes.bool,
  setIsDraw: PropTypes.bool,
  setIsGameEnded: PropTypes.bool,
}
