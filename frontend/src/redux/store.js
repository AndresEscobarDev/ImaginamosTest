import { createStore, combineReducers } from 'redux'
import car from './reducers/car'
import results from './reducers/results'

const reducer = combineReducers({
  car,
  results,
});

const store = createStore(reducer);

export default store;