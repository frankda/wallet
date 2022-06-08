import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Button from 'components/Button/Button'
import BaseModal from 'components/TransferModal/BaseModal'
import { InputAdornment, TextField } from '@mui/material'
import { useAppDispatch } from 'hooks/reduxTypeHook'
import { send } from 'redux/slices/balanceSlice'

const SendModal = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ sendAmount, setSendAmount ] = useState('')
  const [ address, setAddress ] = useState('')

  const dispatch = useAppDispatch()

  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendAmount(e.target.value)
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const submitDeposit = () => {
    const sendNumber = Number(sendAmount)
    if (isNaN(sendNumber)) {
      return alert('Please enter a valid number')
    }
    dispatch(send(sendNumber))
    setModalOpen(false)
  }

  return (
    <>
      <Button variant="text" onClick={() => setModalOpen(true)}>Send</Button>
      <BaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={submitDeposit}
        title="Deposit"
      >
        <TextField
          fullWidth
          label="Wallet Address"
          margin="normal"
          onChange={handleAddressChange}
          value={address}
        />
        <TextField
          fullWidth
          label="Amount"
          helperText="Enter a number"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleSendAmountChange}
          placeholder="0"
          value={sendAmount}
        />
      </BaseModal>
    </>
  )
}

export default SendModal