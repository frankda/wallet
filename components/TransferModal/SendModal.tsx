import { useState } from 'react'
import Button from 'components/Button/Button'
import BaseModal from 'components/TransferModal/BaseModal'
import { Box, InputAdornment, FormControl, MenuItem, TextField, styled, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/reduxTypeHook'
import { send } from 'redux/slices/balanceSlice'

const Account = styled(Box)`
  width: 100%;
`

const SendModal = () => {
  const [ bankBSB, setBankBSB ] = useState('')
  const [ bankAccount, setBankAccount ] = useState('')
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ sendAmount, setSendAmount ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ sendMethod, setSendMethod ] = useState('wallet')

  const dispatch = useAppDispatch()
  const balance = useAppSelector((state) => state.balance.value)

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendMethod(e.target.value)
  }

  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendAmount(e.target.value)
  }

  const handleBankBSBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankBSB(e.target.value)
  }

  const handleBankAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankAccount(e.target.value)
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const renderSendMethodByType = () => {
    switch(sendMethod) {
      case 'wallet':
        return (
          <TextField
            fullWidth
            label="Wallet Address"
            margin="normal"
            onChange={handleAddressChange}
            value={address}
          />
        )
      case 'bank':
        return (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 0, md: 2 }}
          >
            <Box>
              <TextField
                fullWidth
                label="BSB"
                margin="normal"
                onChange={handleBankBSBChange}
                value={bankBSB}
              />
            </Box>
            <Account>
              <TextField
                fullWidth
                label="Account"
                margin="normal"
                onChange={handleBankAccountChange}
                value={bankAccount}
              />
            </Account>
          </Stack>
        )
    }
  }

  const submitDeposit = () => {
    const sendNumber = Number(sendAmount)
    if (isNaN(sendNumber) || !sendNumber) {
      return alert('Please enter a valid number')
    }
    if (balance < sendNumber) {
      return alert('Not enough balance')
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
        <FormControl>
          <TextField
            label="Type"
            margin="normal"
            onChange={handleSelectChange}
            select
            value={sendMethod}
          >
            <MenuItem value="bank">Bank Account</MenuItem>
            <MenuItem value="wallet">Wallet</MenuItem>
          </TextField>
        </FormControl>
        {renderSendMethodByType()}
        <TextField
          data-testid="send-amount-input"
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