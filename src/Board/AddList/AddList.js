import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OpenAddList from './OpenAddList';
import AddListControls from './AddListControls';

import './AddList.css';
import AddListActions from './AddListActions';

class AddList extends Component {
  static propTypes = {
    onAddList: PropTypes.func.isRequired,
    lists: PropTypes.array,
    openAddList: PropTypes.bool,
    listName: PropTypes.string,
    loading: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleListNameChange = this.handleListNameChange.bind(this);
    this.onAddList = this.onAddList.bind(this);
  }

  handleListNameChange(event) {
    const target = event.target;
    const value = target.value;
    this.props.handleListNameChange(value);
  }

  onAddList() {
    if (this.props.listName) {
      this.props.onAddList(this.props.listName);
    }
  }

  render() {
    let element;
    if (this.props.openAddList) {
      element = (
        <AddListControls
          loading={this.props.loading}
          listName={this.props.listName}
          toggleOpenAddList={this.props.toggleOpenAddList}
          handleListNameChange={this.handleListNameChange}
          onAddList={this.onAddList}
        />
      );
    } else {
      let addListLabel;
      if (this.props.lists.length > 0) {
        addListLabel = 'Add another list';
      }
      element = (
        <OpenAddList
          label={addListLabel}
          toggleOpenAddList={this.props.toggleOpenAddList}
        />
      );
    }
    return <Fragment>{element}</Fragment>;
  }
}

const mapStateToProps = state => ({
  loading: state.newList.loading,
  lists: state.lists.lists,
  openAddList: state.newList.openAddList,
  listName: state.newList.listName
});

const mapDispatchToProps = dispatch => ({
  onAddList: listName => dispatch(AddListActions.addListRequest(listName)),
  toggleOpenAddList: () => dispatch(AddListActions.toggleOpenAddList()),
  handleListNameChange: listName =>
    dispatch(AddListActions.handleListNameChange(listName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList);
