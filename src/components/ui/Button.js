import { withRouter } from 'react-router-dom'
import React, { Component } from "react";

import './Button.css';

class Button extends Component {

  render() {
	let className = `btn ${this.props.style}`;
    return (
      <a className={className} onClick={this.props.onClick}>
        {this.props.value}
      </a>
    );
  }
}

export default withRouter(Button);

