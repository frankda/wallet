import reducer, {
  deposit,
  initialBalance,
  send,
  setBalance,
} from 'redux/slices/balanceSlice'

const INIT_STATE = {
  initialized: false,
  history: [],
  value: 0
}

describe('Balance Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(INIT_STATE)
  })

  it('initialise store', () => {
    expect(reducer(INIT_STATE, initialBalance())).toEqual({
      ...INIT_STATE,
      initialized: true,
    })
  })

  it('setup the state directly', () => {
    expect(reducer(INIT_STATE, setBalance({
      history: [{ value: 2, date: new Date().toLocaleTimeString() }],
      value: 15
    }))).toEqual({
      ...INIT_STATE,
      history: [{ value: 2, date: new Date().toLocaleTimeString() }],
      value: 15
    })
  })

  it('should add deposit to balance value', () => {
    const previousState = {
      initialized: false,
      history: [],
      value: 0
    }
    expect(reducer(previousState, deposit(66))).toEqual({
      initialized: false,
      history: [{ value: 66, date: new Date().toLocaleTimeString() }],
      value: 66
    })
  })

  it('should send out from wallet', () => {
    const previousState = {
      initialized: false,
      history: [],
      value: 11
    }
    expect(reducer(previousState, send(9))).toEqual({
      initialized: false,
      history: [{ value: 2, date: new Date().toLocaleTimeString() }],
      value: 2
    })
  })

})