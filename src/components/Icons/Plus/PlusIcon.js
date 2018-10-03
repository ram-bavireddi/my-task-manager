import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PlusIcon.css';

export default class PlusIcon extends Component {
  render() {
    return (
      <span className="PlusIcon icon">
        <FontAwesomeIcon icon="plus" size="sm" />
      </span>
    );
  }
}
