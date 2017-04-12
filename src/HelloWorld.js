import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	constructor(props){
		super(props);
		this.state = {greeting: "Hello"};
		this.germanize = this.germanize.bind(this);
	}
	germanize(){
		this.setState({greeting: "Guten Tag"});
	}
	render(){
		return (
	  		<div className="HelloWorld">
	  			{this.state.greeting} {this.props.name}!
	  			<br/>
	  			<button onClick={this.germanize}>Germanize!</button>
	  		</div>
	  	);
	};
};

export default HelloWorld;