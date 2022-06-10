import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Button from 'components/Button/Button'
import BaseModal from 'components/TransferModal/BaseModal'
import { InputAdornment, TextField } from '@mui/material'
import { useAppDispatch } from 'hooks/reduxTypeHook'
import { deposit } from 'redux/slices/balanceSlice'

const DepositModal = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ depositAmount, setDepositAmount ] = useState('')

  const dispatch = useAppDispatch()

  const handleDepositAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(e.target.value)
  }

  const submitDeposit = () => {
    const depositNumber = Number(depositAmount)
    if (isNaN(depositNumber) || !depositAmount) {
      return alert('Please enter a valid number')
    }
    dispatch(deposit(depositNumber))
    setModalOpen(false)
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Deposit</Button>
      <BaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={submitDeposit}
        title="Deposit"
      >
        <TextField
          data-testid="deposit-amount-input"
          fullWidth
          label="Amount"
          helperText="Enter a number"
          margin="dense"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleDepositAmountChange}
          placeholder="0"
          value={depositAmount}
        />
      </BaseModal>
    </>
  )
}

export default DepositModal