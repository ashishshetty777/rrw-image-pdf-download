import React from 'react';
import _ from 'lodash';

import PDFSingle from './pdf_single';

const PDFComponent = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(props.pdfs).map((elem)=>{
                    let pdf = props.pdfs[elem];
                    return <PDFSingle key={pdf.link}
                            path={pdf.link}
                            checked={pdf.checked}
                            id={pdf.id}
                            selectPDF={props.selectPDF}
                            showPDF={props.showPDF}/>
                })
            }
        </React.Fragment>
    )
}

export default PDFComponent