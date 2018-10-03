import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '../../../../components/Icons/Plus/PlusIcon';

class OpenAddCard extends Component {
  static propTypes = {
    label: PropTypes.string,
    toggleOpenAddCard: PropTypes.func.isRequired
  };

  render() {
    let label = 'Add a card';
    if (this.props.label) {
      label = this.props.label;
    }
    return (
      <div
        className="AddCard OpenAddCard"
        onClick={this.props.toggleOpenAddCard}
      >
        <PlusIcon />
        <span>{label}</span>
      </div>
    );
  }
}

export default OpenAddCard;
