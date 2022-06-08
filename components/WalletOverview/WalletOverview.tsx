import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DepositModal from 'components/TransferModal/DepositModal'
import SendModal from 'components/TransferModal/SendModal'
import { useState } from 'react'

const WalletOverview = () => {
  return (
    <Stack justifyContent="space-between" direction={{ xs: 'column', md: 'row' }} alignItems="center">
      <Typography variant="h3" component="h1">Wallet Overview</Typography>
      <Stack spacing={2} direction="row">
        <DepositModal />
        <SendModal />
      </Stack>
    </Stack>
  )
}

export default WalletOverview