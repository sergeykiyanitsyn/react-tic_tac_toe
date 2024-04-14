import { Field, Info } from './components'
import styles from './Game.module.css'
import { store } from './components/store'
import { useEffect, useState } from 'react'

export const Game = () => {
  const [stateApp, setStateApp] = useState(false)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log('State Change', store.getState())
      console.log(stateApp)
      setStateApp(!stateApp)
    })
    return () => {
      unsubscribe()
    }
  }, [stateApp])

  const restart = () => {
    store.dispatch({ type: 'RESTART' })
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.gameBoard}>
          <Info />
          <Field />
          <button className={styles.restart} onClick={restart}>
            Начать заново
          </button>
        </div>
      </div>
    </>
  )
}
