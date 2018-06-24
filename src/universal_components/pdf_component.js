import React from 'react';
import _ from 'lodash';

import PDFSingle from './pdf_single';

const PDFComponent = (props) => {
    return (
        <React.Fragment>
            <div>
                <a href='javascript:void(0)' className='btn btn-primary' onClick={()=>{props.downloadPDFs}}>Download Selected Images
                </a>
            </div>
            <PDFSingle path={'../../public/docs/dummy-pdf_2.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_21.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_22.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_23.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_24.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_25.pdf'} showPDF={props.showPDF}/>
            <PDFSingle path={'../../public/docs/dummy-pdf_27.pdf'} showPDF={props.showPDF}/>
        </React.Fragment>
    )
}

export default PDFComponent