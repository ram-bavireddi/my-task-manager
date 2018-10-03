import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PencilIcon.css';

export default class PencilIcon extends Component {
  render() {
    return (
      <span className="PencilIcon icon">
        <FontAwesomeIcon icon="pencil-alt" size="sm" />
      </span>
    );
  }
}
