import products from '../../jsons/products.json'
import { type as findResultsType } from '../actions/findResults'
const defaultState = products

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findResultsType: {
      return products.filter(item => item.categories.includes(payload))
    }
    default:
      return state
  }
}

export default reducer;