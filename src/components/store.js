import { appReducer } from './reducer'

export const createStore = (reducer) => {
  let state
  let callbacks = []

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action)
      callbacks.forEach((callback) => callback())
    },
    subscribe: (callback) => {
      callbacks.push(callback)
      return () => callbacks.filter((cb) => cb !== callback)
    },
  }
}

export const store = createStore(appReducer)

store.dispatch({})
