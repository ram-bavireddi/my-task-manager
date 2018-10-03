import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '../../components/Icons/Plus/PlusIcon';

class OpenAddList extends Component {
  static propTypes = {
    label: PropTypes.string,
    toggleOpenAddList: PropTypes.func.isRequired
  };

  render() {
    let label = 'Add a list';
    if (this.props.label) {
      label = this.props.label;
    }
    return (
      <div
        className="AddList OpenAddList"
        onClick={this.props.toggleOpenAddList}
      >
        <PlusIcon />
        <span>{label}</span>
      </div>
    );
  }
}

export default OpenAddList;
