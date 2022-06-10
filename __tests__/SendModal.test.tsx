import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import SendModal from '../components/TransferModal/SendModal'
import '@testing-library/jest-dom'

global.alert = jest.fn()

describe('SendModal closed', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SendModal />
      </Provider>
    )
  })

  it('Send button should be in document', () => {
    const modalBtn = screen.getByRole('button')
    expect(modalBtn).toBeInTheDocument()
  })

  it('should open send modal when click on the send button', () => {
    const modalBtn = screen.getByRole('button')
    fireEvent.click(modalBtn)
    expect(screen.queryByTestId('modal-title')).toBeInTheDocument()
  })
})

describe('SendModal opened', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SendModal />
      </Provider>
    )
    const modalBtn = screen.getByRole('button')
    fireEvent.click(modalBtn)
  })

  it('close modal when close cancel button', async () => {
    const cancelBtn = screen.getByTestId('cancel-btn')
    fireEvent.click(cancelBtn)
    await waitFor(() => {
      expect(cancelBtn).not.toBeInTheDocument()
    })
  })

  it('close modal if input is valid', () => {
    const confirmBtn = screen.getByTestId('confirm-btn')
    const input = screen.getByTestId('send-amount-input') as HTMLElement
    // @ts-ignore
    fireEvent.change(input.querySelector('input'), { target: { value: 233 } })
    fireEvent.click(confirmBtn)
    expect(global.alert).not.toBeCalled()
  })
  
  it('cannot confirm if input is not a valid number', () => {
    const confirmBtn = screen.getByTestId('confirm-btn')
    const input = screen.getByTestId('send-amount-input') as HTMLInputElement
    input.value = 'string input'
    fireEvent.click(confirmBtn)
    expect(global.alert).toBeCalled()
  })
})