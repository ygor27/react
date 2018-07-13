import React, { Component } from "react";

import './Cotacao.css';
import Button from "./ui/Button";
import Input from "./ui/Input";
import { validate } from "../helpers/validate";
import { empresaService } from "../services/Empresa";
import icone from '../assets/images/bar-chart.svg';

class Cotacao extends Component {

	checkCNPJ = () => {
        this.setState({empresa: null});
        if(validate.checkCNPJ(this.state.cnpj)) {
		  this.setState({cnpjValid: true});
          empresaService.getByCNPJ(this.state.cnpj, (status, data) => { 
            if(status === 200) {
                this.setState({empresa: data});
            }
            if(status === 404) {
                window.alert('Empresa nao localizada');
            }
        })
        } else {
            
        }
	}

    constructor(props) {
        super(props);
        this.state = {
          cnpj: '',
          empresa: null,
          cnpjValid: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({cnpj: event.target.value});
    }    

  render() {
    return (
      <div className="wrapper cotacao">
    	<header className="cotacao-info">
    		<img src={icone} className="icone-md cotacao-info-icon" alt="icone grafico" />
    		<div className="cotacao-info-text">
                <h5 className="text-white m-0">Nova Cotacao</h5>
        		<p className="text-white m-0"><small>#4422</small></p>
            </div>
            <div className="cotacao-info-user">
    		  <img src="https://randomuser.me/api/portraits/thumb/men/65.jpg"  />
            </div>
    	</header>
    	<div className="step">
    		<span className="step-number">1</span>
    		<h4 className="step-title">Buscar por CNPJ ou empresa</h4>
    	</div>
        <Input onBlur={this.checkCNPJ} onChange={this.handleChange} label="CNPJ/Empresa" name="cnpj" valid={this.state.empresa} value={this.state.cnpj} />
        <div className="page-action">
            <Button value="Texto" style="btn-primary" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
 
export default Cotacao;