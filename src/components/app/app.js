import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import MyComponent from '../my_component/my_component';
import OtherComponent from '../other_component/other_component';
import './app.scss';


class App extends React.Component {

	constructor(props){
		super(props);
	}

	render(){		
		return (
			<BrowserRouter>
				<div className='container'>
					<Switch>
						<Route exact path='/othercomp' component={OtherComponent} />
						<Route exact path='/' component={MyComponent} />
					</Switch>
				</div>
			</BrowserRouter>
			);
	}
}

export default App;