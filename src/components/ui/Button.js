import { withRouter } from 'react-router-dom'
import React, { Component } from "react";

import './Button.css';

class Button extends React.Component {

  render() {
    return (
      <a className="btn" onClick={this.props.onClick}>
        {this.props.value}
      </a>
    );
  }
}

export default withRouter(Button);

