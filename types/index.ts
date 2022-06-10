import store from 'redux/store'

// Redux
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type History = {
  date: string
  value: number
}