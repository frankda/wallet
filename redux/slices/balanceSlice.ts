import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { History } from 'types'

export interface BalanceState {
  initialized: boolean
  history: History[]
  value: number
}

const initialState: BalanceState = {
  initialized: false,
  history: [],
  value: 0
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    initialBalance(state) {
      state.initialized = true
    },
    setBalance(state, action) {
      state.value = action.payload.value
      state.history = action.payload.history
    },
    deposit(state, action: PayloadAction<number>) {
      state.value += action.payload
      state.history.push({
        date: new Date().toLocaleTimeString(),
        value: state.value,
      })
    },
    send(state, action: PayloadAction<number>) {
      state.value -= action.payload
      state.history.push({
        date: new Date().toLocaleTimeString(),
        value: state.value,
      })
    }
  }
})

export const {
  deposit,
  initialBalance,
  send,
  setBalance,
} = balanceSlice.actions

export default balanceSlice.reducer