import React from 'react';

const PDFSingle = (props) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">PDF</h5>
                <i className="fas fa-file-pdf"></i>
                <a href='javascript:void(0)' onClick={()=> {props.showPDF(props.path)}}>{props.path}</a>
            </div>
        </div>
    )
}

export default PDFSingle;
