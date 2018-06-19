import React from 'react';
import Profile from './Profile.jsx';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component{
	render(){
		return(		
			<Router>
				<div>
					<Route exact path="/" component={App} />
					<Route path="/profile" component={Profile} />
				</div>
			</Router>
		)
	}
}

export default Main;