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
      <DialogTitle data-testid="modal-title">
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button data-testid="cancel-btn" onClick={onClose}>Cancel</Button>
        <Button data-testid="confirm-btn" onClick={onConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BaseModal