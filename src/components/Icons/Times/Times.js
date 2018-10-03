import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './Times.css';

export default class TimesIcon extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <span className="icon icon-times" onClick={this.props.onClick}>
        <FontAwesomeIcon icon="times" size="sm" />
      </span>
    );
  }
}
