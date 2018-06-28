import axios from 'axios';

let pdf_arr = [
    {
        id: 1,
        link : '../../public/docs/dummy-pdf_2.pdf',
        checked: false
    },
    {
        id: 2,
        link : '../../public/docs/dummy-pdf_21.pdf',
        checked: false
    },
    {
        id: 3,
        link : '../../public/docs/dummy-pdf_22.pdf',
        checked: false
    },
    {
        id: 4,
        link : '../../public/docs/dummy-pdf_23.pdf',
        checked: false
    },
    {
        id: 5,
        link : '../../public/docs/dummy-pdf_24.pdf',
        checked: false
    },
    {
        id: 6,
        link : '../../public/docs/dummy-pdf_25.pdf',
        checked: false
    },
    {
        id: 7,
        link : '../../public/docs/dummy-pdf_27.pdf',
        checked: false
    }
]

let image_arr = [
    {
        id: 1,
        thumbnailUrl : 'http://placehold.it/150/92c952',
        url: '../../public/images/123.png',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        checked: false
    },
    {
        id: 2,
        thumbnailUrl : 'http://placehold.it/150/771796',
        url: '../../public/images/123.png',
        title: 'reprehenderit est deserunt velit ipsa',
        checked: false
    },
    {
        id: 3,
        thumbnailUrl : 'http://placehold.it/150/92c952',
        url: '../../public/images/123.png',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        checked: false
    },
    {
        id: 4,
        thumbnailUrl : 'http://placehold.it/150/771796',
        url: '../../public/images/123.png',
        title: 'reprehenderit est deserunt velit ipsa',
        checked: false
    },
    {
        id: 5,
        thumbnailUrl : 'http://placehold.it/150/92c952',
        url: '../../public/images/123.png',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        checked: false
    },
    {
        id: 6,
        thumbnailUrl : 'http://placehold.it/150/771796',
        url: '../../public/images/123.png',
        title: 'reprehenderit est deserunt velit ipsa',
        checked: false
    },
    {
        id: 7,
        thumbnailUrl : 'http://placehold.it/150/92c952',
        url: '../../public/images/123.png',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        checked: false
    }
]

const dispatchGetResults = results => ({
    type: 'RETRIVE_RESULTS',
    results
})

const dispatchRetrivePDFs = results => ({
    type: 'RETRIVE_PDFS',
    results
})

const dispatchImageCheckClick = id => ({
    type: 'IMAGE_CHECK_CLICK',
    id
})

const dispatchCheckPDF = id => ({
    type: 'PDF_CHECK_CLICK',
    id
})

export const retriveResults = (obj) =>async dispatch =>{
    try{
        // let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        dispatch(dispatchGetResults(image_arr));
    }catch(e){
        console.log(e);
    }
}

export const imageCheckClick = (id) =>async dispatch =>{ 
    dispatch(dispatchImageCheckClick(id));
}

export const retrivePDFs = () =>async dispatch =>{
    dispatch(dispatchRetrivePDFs(pdf_arr));
}

export const checkPDF = (id) =>async dispatch =>{
    dispatch(dispatchCheckPDF(id));
}
  
  

  