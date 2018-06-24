import React from 'react';
import { Link } from 'react-router-dom';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<React.Fragment>
				<h1> Other Component </h1>
				<Link to={'/'}> Link to My Component</Link>
			</React.Fragment>
			)
	}
}

export default MyComponent;