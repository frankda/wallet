import { useAppSelector } from 'hooks/reduxTypeHook'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

const Container = styled(Box)`
  margin-top: 12px;
`

const AmountDisplay = () => {
  const balance = useAppSelector((state) => state.balance.value)
  return (
    <Container>
      <Typography variant="h5" component="h2">My balance: ${balance}</Typography>
    </Container>
  )
}

export default AmountDisplay