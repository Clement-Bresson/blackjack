import {
  TEST_PASS
} from './../actions/types'

const intialState = {
  testPassed: false
}

const reducers = (state, action) => {
  if (typeof state === 'undefined') {
    return intialState
  }

  switch (action.type) {
    case TEST_PASS:
      return { ...state, testPassed: true }
    default:
      return state
  }
}

export default reducers
