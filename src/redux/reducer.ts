import { createSlice } from '@reduxjs/toolkit'
import { ConnectionType } from '@/web3/connections'
interface AppState {
  selectedWallet?: ConnectionType
  isDesktop: boolean
  isDark: boolean
  value: number
}
export const DESKTOP_WIDTH = 768
export let isDesktop = false
export const isDark = true

if (typeof document !== 'undefined') {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    isDesktop = true
  }
}
const initialState: AppState = {
  value: 0,
  selectedWallet: undefined,
  isDesktop,
  isDark,
}
export const initSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
      console.log(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateDesktop: (state, action) => {
      state.isDesktop = action.payload
    },
    updateDark: (state, action) => {
      state.isDark = action.payload
    },
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateDesktop, updateDark, updateSelectedWallet } =
  initSlice.actions

export default initSlice.reducer
