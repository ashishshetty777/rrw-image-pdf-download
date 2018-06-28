import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retriveResults, imageCheckClick } from '../../actions/my_action';
import Modal from '../../universal_components/modal';
import PDFComponent from '../../universal_components/pdf_component';
import _ from 'lodash';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
		this.showCards = this.showCards.bind(this);
	}

	componentDidMount(){
		this.props.retriveResults();
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
					<h1> Image Route </h1>
					<a href="javascript:void(0)" style={{color: 'black'}}> Images </a>
					<Link to={'/othercomp'} style={{color: 'red'}}> Documents </Link>
					<div>
						<a href='javascript:void(0)' className='btn btn-primary' onClick={this.downloadImages.bind(this)}>Download Selected Images
						</a>
					</div>
					<div>
						{this.showCards()}
					</div>
					{modal}
			</div>
			)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		results: state.myReducer.results,
		checkedImages: state.myReducer.checkedImages
	};
  }
  
const mapDispatchToProps = (dispatch) => {
		return {
			retriveResults: () => dispatch(retriveResults()),
			imageCheckClick: (id) => dispatch(imageCheckClick(id))
		};
};

export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);
  
