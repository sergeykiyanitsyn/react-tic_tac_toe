export const initialState = {
  field: ['', '', '', '', '', '', '', '', ''],
  statusGame: null,
  currentPlayer: true,
}

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'RESTART':
      return {
        ...state,
        field: ['', '', '', '', '', '', '', '', ''],
        statusGame: null,
        currentPlayer: true,
      }

    case 'PAINT_CELL':
      return { ...state, field: payload }

    case 'CHANGE_PLAYER':
      return { ...state, currentPlayer: !payload }

    case 'CHANGE_STATUS_GAME':
      return { ...state, statusGame: payload }

    default:
      return state
  }
}
