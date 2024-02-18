import PropTypes from 'prop-types'
import { showStatusGame } from './hoocks/hoocks'

export const InformationLayout = (props) => {
  return <>{showStatusGame(props)}</>
}

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
}
