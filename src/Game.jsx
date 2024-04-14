import { Field, Information, Restart } from './components'
import styles from './Game.module.css'
import { store } from './components/store'
import { useEffect, useState } from 'react'
// currentPlayer: true = 'Крестики' | false = 'Нолики'
// statusGame: true = Win | false = Draw | null = GameContinues

export const Game = () => {
  const [stateApp, setStateApp] = useState(false)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log('State Change', store.getState())
      setStateApp(!stateApp)
    })
    return () => {
      unsubscribe()
    }
  }, [stateApp])

  store.dispatch({})

  return (
    <>
      <div className={styles.background}>
        <div className={styles.gameBoard}>
          <Information />
          <Field />
          <Restart />
        </div>
      </div>
    </>
  )
}
