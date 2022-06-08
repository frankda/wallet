import { 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions } from '@mui/material'

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
}

const BaseModal = ({ children, isOpen, onClose, onConfirm, title }: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BaseModal