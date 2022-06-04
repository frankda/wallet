import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from 'types'

interface BalanceState {
  value: number
}

const initialState: BalanceState = {
  value: 0
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    depositToWallet(state, action: PayloadAction<number>) {
      state.value = action.payload
    }
  }
})

export const { depositToWallet } = balanceSlice.actions

export default balanceSlice.reducer