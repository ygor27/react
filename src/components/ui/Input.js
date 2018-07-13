import React, { Component } from "react";

import './Input.css';

class Input extends Component {

  render() {
    return (
        <div className="input-wrapper">
            {this.props.valid &&
                <span className="input-wrapper-validation"></span>
            }
            <input type="text" name={this.props.name} value={this.props.value} onBlur={this.props.onBlur} onChange={this.props.onChange} />
        	<label className="input-wrapper" htmlFor={this.props.name}>{this.props.label}</label>
        </div>
    );
  }
}

export default Input;

