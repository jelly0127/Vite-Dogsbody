import { configureStore } from '@reduxjs/toolkit'
import initSlice from '../redux/reducer'
import { load, save } from 'redux-localstorage-simple'

const PERSISTED_KEYS: string[] = ['app']

const store = configureStore({
  reducer: {
    app: initSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: true }).concat(save({ states: PERSISTED_KEYS, debounce: 500 })),
  preloadedState: load({ states: PERSISTED_KEYS }),
})
export default store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
