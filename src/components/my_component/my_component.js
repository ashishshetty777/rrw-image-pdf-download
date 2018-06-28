import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retriveResults, imageCheckClick, retrivePDFs, checkPDF } from '../../actions/my_action';
import Modal from '../../universal_components/modal';
import PDFComponent from '../../universal_components/pdf_component';
import _ from 'lodash';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tab: 'image',
			showModal: false
		}
		this.showCards = this.showCards.bind(this);
		this.showPDF = this.showPDF.bind(this);
		this.selectPDF= this.selectPDF.bind(this);
	}

	componentDidMount(){
		this.props.retriveResults();
		this.props.retrivePDFs();
	}

	showPDF(path){
		this.setState({showModal: true, pdfUrl:path})
	}

	selectPDF(e, id){
		this.props.checkPDF(id);
	}

	showCards(){
		let { results } = this.props;
		return Object.keys(results).map((elem_id)=>{
			return(
				<div key={elem_id} className="card">
					<div className="card-body">
						<input type='checkbox' id={results[elem_id]} checked={results[elem_id].checked} onChange={()=>{this.props.imageCheckClick(elem_id)}}/>
						<h5 className="card-title">{results[elem_id].title}</h5>
						<a download id={`img-${elem_id}`} href={results[elem_id].url} target='_blank'></a>
							<img href="javascript:void(0)" 
								onClick={()=>{this.setState({showModal: true, imageUrl:results[elem_id].url})}}
								src={results[elem_id].thumbnailUrl} />
					</div>
				</div>
			)
		})
	}

	downloadImages(){
		let { checkedImages } = this.props;
		for(let i in checkedImages){
			if(checkedImages[i]){
				let elem = document.getElementById(`img-${i}`);
				elem.click();
			}
		}
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
				 onClick={()=>{this.setState({showModal: false, imageUrl:'', pdfUrl: ''})}}>Close</a>
				/>
				{
					this.state.imageUrl &&
						<img src={this.state.imageUrl} />
				}
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
					<h1> My Component </h1>
					{/*<Link to={'/othercomp'}> Link to Other Component</Link>*/}	
					<a href="javascript:void(0)" style={{color: this.state.tab === 'image' ? 'red' : 'black'}} onClick={()=>{this.setState({tab: 'image'})}}> Images </a>
					<a href="javascript:void(0)" style={{color: this.state.tab === 'doc' ? 'red' : 'black'}} onClick={()=>{this.setState({tab: 'doc'})}}> Documents </a>
					<div className=''>
						{
							this.state.tab === 'image' ?
									<div>
										<div>
											<a href='javascript:void(0)' className='btn btn-primary' onClick={this.downloadImages.bind(this)}>Download Selected Images
											</a>
										</div>
										<div>
											{this.showCards()}
										</div>
									</div> :
									<div>
										<div>
											<a href='javascript:void(0)' className='btn btn-primary' onClick={this.downloadPDFs.bind(this)}>Download Selected PDFs
											</a>
										</div>
										<PDFComponent showPDF={this.showPDF}
											downloadPDFs={this.downloadPDFs.bind(this)} 
											pdfs={this.props.pdfObjects}
											selectPDF={this.selectPDF} />
									 </div>
						}
					</div>
					{modal}
			</div>
			)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		results: state.myReducer.results,
		checkedImages: state.myReducer.checkedImages,
		pdfObjects: state.myReducer.pdfObjects,
		checkedPDFs: state.myReducer.checkedPDFs

	};
  }
  
const mapDispatchToProps = (dispatch) => {
		return {
			retriveResults: () => dispatch(retriveResults()),
			imageCheckClick: (id) => dispatch(imageCheckClick(id)),
			retrivePDFs: () => dispatch(retrivePDFs()),
			checkPDF: (id) => dispatch(checkPDF(id))	
		};
};

export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);
  
