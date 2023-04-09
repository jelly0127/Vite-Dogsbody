import { configureStore } from '@reduxjs/toolkit'
import initSlice from '../redux/reducer'
export default configureStore({
  reducer: {
    init: initSlice,
  },
})
