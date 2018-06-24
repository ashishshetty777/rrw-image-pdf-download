import axios from 'axios';

let data_json = [{
    post_id: "Call me Ashish",
    is_liked: false
}, {
    post_id: "Call me Shetty",
    is_liked: false
}]
const dispatchGetResults = results => ({
    type: 'RETRIVE_RESULTS',
    results
})

const dispatchMoodClick = id => ({
    type: 'MOOD_CLICK',
    id
})

export const retriveResults = (obj) =>async dispatch =>{
    try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        dispatch(dispatchGetResults(response.data.slice(0, 100)));
    }catch(e){
        console.log(e);
    }
}

export const moodClick = (id) =>async dispatch =>{
    dispatch(dispatchMoodClick(id));
}
  
  

  