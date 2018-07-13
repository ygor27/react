import React, { Component } from "react";

import Button from "./ui/Button";
import './Home.css';
import icone from '../assets/images/bar-chart.svg';
 
class Home extends Component {
	handleClick = () => {
	  this.props.history.push('/cotacao')
	}	
	render() {
		return (
		  <div className="wrapper home">
		  	<div className="home-instructions">
			  	<img src={icone} className="icone-md" alt="icone grafico" />
			    <h2 className="text-white">Cotação de Seguros</h2>
			    <p className="text-white home-subtitle">Solução inovadora da líder de mercado</p>
			    <Button text="Iniciar" type="btn-default" onClick={this.handleClick} />
		  	</div>
		  </div>
		);
	}
}
 
export default Home;