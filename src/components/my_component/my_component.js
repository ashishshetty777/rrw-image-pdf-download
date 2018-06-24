import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retriveResults, moodClick } from '../../actions/my_action';
import Modal from '../../universal_components/modal';
import PDFComponent from '../../universal_components/pdf_component';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tab: 'image',
			showModal: false
		}
		this.showCards = this.showCards.bind(this);
		this.showPDF = this.showPDF.bind(this);
	}

	componentDidMount(){
		this.props.retriveResults();
	}

	showPDF(path){
		console.log(path,"kokokokok")
		this.setState({showModal: true, pdfUrl:path})
	}

	showCards(){
		let { results } = this.props;
		return Object.keys(results).map((elem_id)=>{
			return(
				<div key={elem_id} className="card">
					<div className="card-body">
						<h5 className="card-title">{results[elem_id].title}</h5>
						<img href="javascript:void(0)" 
							onClick={()=>{this.setState({showModal: true, imageUrl:results[elem_id].url})}}
							src={results[elem_id].thumbnailUrl} />
					</div>
				</div>
			)
		})
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
			<React.Fragment>
					<h1> My Component </h1>
					{/*<Link to={'/othercomp'}> Link to Other Component</Link>*/}	
					<a href="javascript:void(0)" style={{color: this.state.tab === 'image' ? 'red' : 'black'}} onClick={()=>{this.setState({tab: 'image'})}}> Images </a>
					<a href="javascript:void(0)" style={{color: this.state.tab === 'doc' ? 'red' : 'black'}} onClick={()=>{this.setState({tab: 'doc'})}}> Documents </a>
					{
						this.state.tab === 'image' ?
								this.showCards() :
								<PDFComponent showPDF={this.showPDF}/>
					}
					{modal}
			</React.Fragment>
			)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		results: state.myReducer.results
	};
  }
  
const mapDispatchToProps = (dispatch) => {
		return {
			retriveResults: () => dispatch(retriveResults()),
			moodClick: (id) => dispatch(moodClick(id))			
		};
};

export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);
  
