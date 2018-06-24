import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];

export default function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
	return store;
}