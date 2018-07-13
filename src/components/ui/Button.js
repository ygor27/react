import React, { Component } from "react";

import './Button.css';

class Button extends Component {

  render() {
	let className = `btn ${this.props.type}`;
    return (
      <a className={className} onClick={this.props.onClick}>
        {this.props.text}
      </a>
    );
  }
}

export default Button;

