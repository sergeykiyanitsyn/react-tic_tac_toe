/* eslint-disable react/prop-types */
import xPic from './assets/X.png'
import oPic from './assets/O.png'
import { connect } from 'react-redux'
import { Component } from 'react'

// currentPlayer: true = 'Крестики' | false = 'Нолики'

// ------------- Функциональный компонент ----------------

// eslint-disable-next-line react/prop-types
// export const FieldContainer = ({ field, currentPlayer, statusGame, dispatch }) => {
//   const handleClick = (btn) => {
//     const { target } = btn
//     if (target.children.length || target.tagName === 'IMG') return
//     field[target.id] = currentPlayer
//     dispatch({ type: 'PAINT_CELL', payload: [...field] })
//     dispatch({ type: 'CHANGE_PLAYER', payload: currentPlayer })
//   }

//   return (
//     <div className={styles.fieldBox}>
//       {field.map((player, indx) => {
//         const currPic = player ? xPic : oPic
//         return (
//           <button
//             disabled={statusGame !== null}
//             id={indx}
//             key={indx}
//             className={`${styles.cell} ${
//               player !== '' && (player ? styles.cross : styles.zero)
//             }`}
//             onClick={(btn) => handleClick(btn)}
//           >
//             {player !== '' && player !== '' && (
//               <img src={currPic} alt="cross" width={player ? 100 : 50} />
//             )}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// ------------- Классовый компонент ----------------
export class OldFieldContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (btn) => {
    const { target } = btn
    if (target.children.length || target.tagName === 'IMG') return
    this.props.field[target.id] = this.props.currentPlayer
    this.props.dispatch({ type: 'PAINT_CELL', payload: [...this.props.field] })
    this.props.dispatch({ type: 'CHANGE_PLAYER', payload: this.props.currentPlayer })
  }

  render() {
    return (
      <div className="max-h-96 w-full bg-white shadow-xl shadow-gray-500">
        {this.props.field.map((player, indx) => {
          const currPic = player ? xPic : oPic
          return (
            <button
              disabled={this.props.statusGame !== null}
              id={indx}
              key={indx}
              className={`box-border h-32 w-1/3 border border-solid border-black content-center float-left ${
                player !== '' && (player ? 'bg-red-600' : 'bg-blue-800')
              }`}
              onClick={(btn) => this.handleClick(btn)}
            >
              {player !== '' && player !== '' && (
                <img
                  className="block m-auto"
                  src={currPic}
                  alt="cross"
                  width={player ? 100 : 50}
                />
              )}
            </button>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  statusGame: state.statusGame,
})

export const Field = connect(mapStateToProps)(OldFieldContainer)
