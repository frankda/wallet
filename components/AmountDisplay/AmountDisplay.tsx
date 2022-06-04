import { useAppDispatch, useAppSelector } from 'hooks/reduxTypeHook'
import { depositToWallet } from 'redux/slices/balanceSlice'

const AmountDisplay = () => {
  const balance = useAppSelector((state) => state.balance.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <button onClick={() => dispatch(depositToWallet(20))}>click</button>
      {balance}
    </div>
  )
}

export default AmountDisplay