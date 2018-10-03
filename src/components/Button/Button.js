import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    textOnLoad: PropTypes.string,
    classNames: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    let classes = ['btn'];
    if (this.props.classNames) {
      classes.push(this.props.classNames);
    }
    let button;
    if (this.props.loading) {
      button = (
        <button type={this.props.type} className={classes.join(' ')} disabled>
          {this.props.textOnLoad}
        </button>
      );
    } else {
      button = (
        <button
          type={this.props.type}
          className={classes.join(' ')}
          onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
      );
    }
    return button;
  }
}
