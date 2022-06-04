import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from 'redux/slices/balanceSlice'

export default configureStore({
  reducer: {
    balance: balanceReducer
  },
})
