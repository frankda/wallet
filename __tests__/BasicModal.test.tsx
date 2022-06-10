import { render, screen } from '@testing-library/react'
import BaseModal from '../components/TransferModal/BaseModal'
import '@testing-library/jest-dom'

describe('Basic Modal', () => {
  const props = {
    isOpen: true,
    onClose: () => null,
    onConfirm: () => null,
    title: 'Basic Modal'
  }

  it('renders correct title', () => {
    render(<BaseModal {...props} />)
    expect(screen.queryByText('Basic Modal')).toBeInTheDocument()
  })
})