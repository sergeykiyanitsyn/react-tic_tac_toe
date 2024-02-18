import styles from '../InformationLayout.module.css'

const showWinner = (currentPlayer) => {
  let stylesPlayer = ''
  if (currentPlayer === 'Крестики') {
    stylesPlayer = styles.tomato
  } else {
    stylesPlayer = styles.blue
  }

  return (
    <div className={styles.info}>
      {' '}
      Победитель: <span className={stylesPlayer}> {currentPlayer}</span>{' '}
    </div>
  )
}

const showCurrentPlayer = (currentPlayer) => {
  let stylesPlayer = ''
  if (currentPlayer === 'Крестики') {
    stylesPlayer = styles.tomato
  } else {
    stylesPlayer = styles.blue
  }

  return (
    <div className={styles.info}>
      Итак, сейчас ходят: <span className={stylesPlayer}> {currentPlayer}</span>{' '}
    </div>
  )
}

export const showStatusGame = ({ isDraw, isGameEnded, currentPlayer }) => {
  if (isDraw) {
    return <div className={styles.info}> Ничья </div>
  } else if (isGameEnded) {
    return <>{showWinner(currentPlayer)}</>
  } else {
    return <>{showCurrentPlayer(currentPlayer)}</>
  }
}
