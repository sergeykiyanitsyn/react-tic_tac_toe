/* eslint-disable react/prop-types */
import { checkStatusGame } from '../../utils/utils'
import { WIN_PATTERNS } from '../../consts/consts'
import { connect } from 'react-redux'
import { Component } from 'react'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

// // eslint-disable-next-line react/prop-types
// ------------- Функциональный компонент ----------------
// export const InfoContainer = ({ field, statusGame, currentPlayer, dispatch }) => {
//   // isGameOver: true = Win | false = Draw | null = GameContinues
//   const isGameOver = checkStatusGame(WIN_PATTERNS, field, !currentPlayer)

//   useEffect(() => {
//     if (isGameOver !== null) {
//       dispatch({ type: 'CHANGE_STATUS_GAME', payload: isGameOver })
//     }
//   }, [isGameOver, dispatch])

//   return (
//     <div className={styles.info}>
//       {statusGame === null && (
//         <>
//           {'Итак, сейчас ходят:'} <br />
//           <span className={currentPlayer ? styles.tomato : styles.blue}>
//             {currentPlayer ? 'Крестики' : 'Нолики'}
//           </span>
//         </>
//       )}
//       {statusGame === false && 'Ничья'}
//       {statusGame === true && (
//         <>
//           {'Победитель:'} <br />
//           <span className={!currentPlayer ? styles.tomato : styles.blue}>
//             {!currentPlayer ? 'Крестики' : 'Нолики'}
//           </span>
//         </>
//       )}
//     </div>
//   )
// }

// ------------- Классовый компонент ----------------
export class OldInfoContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.checkGameOver()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.field !== prevProps.field ||
      this.props.currentPlayer !== prevProps.currentPlayer
    ) {
      this.checkGameOver()
    }
  }

  checkGameOver = () => {
    // isGameOver: true = Win | false = Draw | null = GameContinues
    const isGameOver = checkStatusGame(
      WIN_PATTERNS,
      this.props.field,
      !this.props.currentPlayer,
    )

    if (isGameOver !== null) {
      this.props.dispatch({ type: 'CHANGE_STATUS_GAME', payload: isGameOver })
    }
  }

  render() {
    return (
      <div className="text-3xl font-sans font-black w-full text-white text-transform: uppercase leading-normal text-center text-shadow-persShadow">
        {this.props.statusGame === null && (
          <>
            {'Итак, сейчас ходят:'} <br />
            <span
              className={this.props.currentPlayer ? 'text-red-800' : 'text-indigo-900'}
            >
              {this.props.currentPlayer ? 'Крестики' : 'Нолики'}
            </span>
          </>
        )}
        {this.props.statusGame === false && 'Ничья'}
        {this.props.statusGame === true && (
          <>
            {'Победитель:'} <br />
            <span
              className={!this.props.currentPlayer ? 'text-red-800' : 'text-indigo-900'}
            >
              {!this.props.currentPlayer ? 'Крестики' : 'Нолики'}
            </span>
          </>
        )}
      </div>
    )
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const mapStateToProps = (state) => ({
  field: state.field,
  statusGame: state.statusGame,
  currentPlayer: state.currentPlayer,
})

export const Info = connect(mapStateToProps)(OldInfoContainer)
