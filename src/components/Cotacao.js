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
        this.setState({message: null});
        if(validate.checkCNPJ(this.state.cnpj)) {
            this.setState({cnpjValid: true});
            this.setState({loading: true});
            empresaService.getByCNPJ(this.state.cnpj, (status, data) => { 
                if(status === 200) {
                    this.setState({empresa: data});
                }
                if(status === 404) {
                    this.setState({message: 'Empresa não localizada'});
                }
                this.setState({loading: false});
            })
        } else {
            if(this.state.cnpj) {
                this.setState({message: 'CNPJ Inválido'});
            }
        }
	}

    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            empresa: null,
            cnpjValid: false,
            loading: false,
            message: null
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
            	  <img src="https://randomuser.me/api/portraits/thumb/men/65.jpg" alt="Avatar usuário"  />
                </div>
            </header>
            <div className="step">
            	<span className="step-number">1</span>
            	<h4 className="step-title">Buscar por CNPJ ou empresa</h4>
            </div>
            <Input onBlur={this.checkCNPJ} onChange={this.handleChange} label="CNPJ/Empresa" name="cnpj" valid={this.state.empresa} value={this.state.cnpj} />
            {this.state.message &&  
                <span>{this.state.message}</span>
            }
            <div className="page-action">
                <Button text="Ok" type="btn-primary" />
            </div>
            </div>
        );
    }
}
 
export default Cotacao;