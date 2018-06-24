import { combineReducers } from 'redux';
import { myReducer } from './my_reducer';

const appReducer = combineReducers({
	myReducer
})

const rootReducer = ( state, action ) => {
  return appReducer(state, action)
}

export default rootReducer;