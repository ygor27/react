import React, { Component } from "react";

import './Cotacao.css';
import Button from "./ui/Button";

class Cotacao extends Component {

	checkCNPJ = () => {
		window.alert('alert')
	}		
  render() {
    return (
      <div>
    	<header className="cotacao-info">
    		<span className="icone"></span>
    		<h5>Nova Cotacao</h5>
    		<p>#4422</p>
    		<img src="" />
    	</header>
    	<div className="step">
    		<span className="step-number">1</span>
    		<h6>Buscar por CNPJ ou empresa</h6>
    	</div>
        <div className="input-wrapper">
        	<label>CNPJ/Empresa</label>
        	<input type="text" onBlur={this.checkCNPJ} />
        </div>
        <Button value="Texto" onClick={this.handleClick} />
      </div>
    );
  }
}
 
export default Cotacao;