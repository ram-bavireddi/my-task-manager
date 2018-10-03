import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import TimesIcon from '../../components/Icons/Times/Times';

class AddListControls extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    listName: PropTypes.string.isRequired,
    toggleOpenAddList: PropTypes.func.isRequired,
    handleListNameChange: PropTypes.func.isRequired,
    onAddList: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="AddList AddListControls">
        <form>
          <input
            className="list-name-input"
            type="text"
            name="listName"
            placeholder="Enter list title..."
            autoComplete="off"
            dir="auto"
            maxLength="512"
            value={this.props.listName}
            onChange={this.props.handleListNameChange}
            autoFocus
          />
          <Button
            loading={this.props.loading}
            text="Add List"
            textOnLoad="Adding..."
            classNames="add-list-button"
            type="button"
            onClick={this.props.onAddList}
          />
          <TimesIcon onClick={this.props.toggleOpenAddList} />
        </form>
      </div>
    );
  }
}

export default AddListControls;
