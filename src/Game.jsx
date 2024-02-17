import { GameLayout } from './GameLayout'
import { useState } from 'react'

let field = ['', '', '', '', '', '', '', '', '']

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('Крестики')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)

  return (
    <GameLayout
      field={field}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
    />
  )
}
