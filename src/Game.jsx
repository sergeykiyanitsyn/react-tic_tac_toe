/* eslint-disable react/prop-types */
import { Field, Info } from './components'
import styles from './Game.module.css'
import { connect } from 'react-redux'
import { Component } from 'react'

// ------------- Функциональный компонент ----------------

// export const GameContainer = ({ dispatch }) => {
//   const restart = () => {
//     dispatch({ type: 'RESTART' })
//   }

//   return (
//     <>
//       <div className={styles.background}>
//         <div className={styles.gameBoard}>
//           <Info />
//           <Field />
//           <button className={styles.restart} onClick={restart}>
//             Начать заново
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// ------------- Классовый компонент ----------------
export class OldGameContainer extends Component {
  constructor(props) {
    super(props)
  }

  restart = () => {
    this.props.dispatch({ type: 'RESTART' })
  }

  render() {
    return (
      <>
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
          <div className={styles.gameBoard}>
            <Info />
            <Field />
            <button className={styles.restart} onClick={this.restart}>
              Начать заново
            </button>
          </div>
        </div>
      </>
    )
  }
}

export const Game = connect()(OldGameContainer)
