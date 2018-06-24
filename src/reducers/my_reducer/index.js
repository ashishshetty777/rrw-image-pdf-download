import { keyBy as _keyBy } from 'lodash';

let initialState = {
	results: {}
};


export const myReducer = (state=initialState, action) => {

	switch(action.type){
		case 'RETRIVE_RESULTS':
			let data = action.results;
			let result_obj = _keyBy(data, 'id') //converted the array into object for optimisation
			return {
				...state,
				results: result_obj
			};
		case 'MOOD_CLICK':
			let required_obj = {...state.results[action.id], is_liked: !(!!state.results[action.id].is_liked)};
			return {
				...state, results : {...state.results, [action.id] : required_obj}
			};
		default:
			return state;
	}
}