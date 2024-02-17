import { InformationLayout } from './InformationLayout'
import PropTypes from 'prop-types'

export const Information = (props) => {
  console.log(props)
  return (
    <>
      <InformationLayout
        currentPlayer={props.currentPlayer}
        isDraw={props.isDraw}
        isGameEnded={props.isGameEnded}
      />
    </>
  )
}

Information.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
}
