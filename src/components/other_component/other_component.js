import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrivePDFs, checkPDF } from '../../actions/my_action';
import Modal from '../../universal_components/modal';
import PDFComponent from '../../universal_components/pdf_component';
import _ from 'lodash';

class OtherComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
		this.showPDF = this.showPDF.bind(this);
		this.selectPDF= this.selectPDF.bind(this);
	}

	componentDidMount(){
		this.props.retrivePDFs();
	}

	showPDF(path){
		this.setState({showModal: true, pdfUrl:path})
	}

	selectPDF(e, id){
		this.props.checkPDF(id);
	}

	downloadPDFs(){
		let { checkedPDFs } = this.props;
		for(let i in checkedPDFs){
			if(checkedPDFs[i]){
				let elem = document.getElementById(`pdf-${i}`);
				elem.click();
			}
		}
	}

	render(){
		const modal = this.state.showModal ? (
			<Modal>
				<a href="javascript:void(0)"
				 className="btn btn-primary"
				 onClick={()=>{this.setState({showModal: false, pdfUrl: ''})}}>Close</a>
				/>
				{
					this.state.pdfUrl &&
					<object data={this.state.pdfUrl} type="application/pdf" width="100%" height="100%">
						<a href={this.state.pdfUrl}>Download PDF</a>
					</object>
				}
			</Modal>
		  ) : null;
		return(
			<div>
					<h1> Documents Route </h1>
					<Link to={'/'} style={{color: 'red'}}> Images </Link>
					<a href="javascript:void(0)" style={{color: 'black'}}> Documents </a>
					<div>
						<a href='javascript:void(0)' className='btn btn-primary' onClick={this.downloadPDFs.bind(this)}>Download Selected PDFs
						</a>
					</div>
					<PDFComponent showPDF={this.showPDF}
						downloadPDFs={this.downloadPDFs.bind(this)} 
						pdfs={this.props.pdfObjects}
						selectPDF={this.selectPDF} />
					{modal}
			</div>
			)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		pdfObjects: state.myReducer.pdfObjects,
		checkedPDFs: state.myReducer.checkedPDFs

	};
  }
  
const mapDispatchToProps = (dispatch) => {
		return {
			retrivePDFs: () => dispatch(retrivePDFs()),
			checkPDF: (id) => dispatch(checkPDF(id))	
		};
};

export default connect(mapStateToProps,mapDispatchToProps)(OtherComponent);
  
