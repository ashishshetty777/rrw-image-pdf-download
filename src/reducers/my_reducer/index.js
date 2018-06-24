import { keyBy as _keyBy } from 'lodash';

let initialState = {
	results: {},
	checkedImages: {},
	pdfObjects: {},
	checkedPDFs: {}
};


export const myReducer = (state=initialState, action) => {

	switch(action.type){
		case 'RETRIVE_RESULTS':
			let data = action.results.map(item => { item.checked = false; return item});

			let result_obj = _keyBy(data, 'id') //converted the array into object for optimisation
			return {
				...state,
				results: result_obj
			};
		case 'IMAGE_CHECK_CLICK':
			let id_val = state.results[action.id].checked;
			let required_obj = {...state.results[action.id], checked: !id_val};
			return {
				...state, 
				results : {...state.results, [action.id] : required_obj}, 
				checkedImages : { ...state.checkedImages, [action.id] : !id_val}
			};
		case 'RETRIVE_PDFS':
			let result_pdfs = _keyBy(action.results, 'id') //converted the array into object for optimisation

			return {
				...state,
				pdfObjects: result_pdfs
			};
		case 'PDF_CHECK_CLICK':
			let id_pdf = state.pdfObjects[action.id].checked;
			let required_pdf = {...state.pdfObjects[action.id], checked: !id_pdf};
			return {
				...state, 
				pdfObjects : {...state.pdfObjects, [action.id] : required_pdf}, 
				checkedPDFs : { ...state.checkedPDFs, [action.id] : !id_pdf}
			};
		default:
			return state;
	}
}