export const getCount = (obj) => {
	let items_selected = 0;
		for(let i in obj){
			if(obj[i]){
				items_selected += 1;
			}
		}
	return items_selected;
}