import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retriveResults, moodClick } from '../../actions/my_action';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
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
						<h5 className="card-title">{elem_id}</h5>
						<a href="javascript:void(0)" className="btn btn-primary" onClick={this.props.moodClick.bind(this, elem_id)}>
							{ results[elem_id].is_liked ? 'Unlike' : 'Like' }
						</a>
					</div>
				</div>
			)
		})
	}

	render(){
		return(
			<React.Fragment>
					<h1> My Component </h1>
					<Link to={'/othercomp'}> Link to Other Component</Link>
					{this.showCards()}
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
  
