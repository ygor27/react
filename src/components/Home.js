import React, { Component } from "react";

import Button from "./ui/Button";
import './Home.css';

 
class Home extends Component {
	handleClick = () => {
	  this.props.history.push('/cotacao')
	}	
	render() {
		return (
		  <div className="wrapper home">
		    <h2>Cotação de Seguros</h2>
		    <Button value="Texto" onClick={this.handleClick} />
		  </div>
		);
	}
}
 
export default Home;