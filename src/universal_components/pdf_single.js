import React from 'react';

const PDFSingle = (props) =>{
    return (
        <div  className="card">
            <div className="card-body">
                <h5 className="card-title">PDF</h5>
				<input type='checkbox' checked={props.checked} onChange={(e)=>{props.selectPDF(e, props.id)}}/>
                <i className="fas fa-file-pdf"></i>
                <a download target='_blank' id={`pdf-${props.id}`} href={props.path}></a>
                <div style={{cursor: 'pointer'}} onClick={()=> {props.showPDF(props.path)}}>
                    {props.path}
                </div>
            </div>
        </div>
    )
}

export default PDFSingle;
