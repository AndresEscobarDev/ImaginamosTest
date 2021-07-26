import { type as carContentType } from '../actions/carContent'

const defaultState = []

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case carContentType: {
      return payload
    }
    default:
      return state
  }
}

export default reducer;