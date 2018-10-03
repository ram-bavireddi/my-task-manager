import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddList from './AddList/AddList';
import Lists from './Lists/Lists';
import ListsActions from './Lists/ListsActions';

import './Board.css';

class Board extends Component {
  static propTypes = {
    lists: PropTypes.array,
    newList: PropTypes.object
  };

  renderAddList() {
    let addListLabel;
    if (this.props.newList) {
      addListLabel = 'Add another list';
    }
    return <AddList addListLabel={addListLabel} />;
  }

  render() {
    return (
      <div className="container-fluid board-wrapper">
        <header className="row board-header">
          <div className="col-sm-12 font-weight-bold">MyBoard</div>
          <div className="col-sm-12">
            <hr />
          </div>
        </header>
        <section className="row board-content">
          <div className="col-sm Board">
            <Lists />
            <AddList />
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchLists();
  }
}

const mapStateToProps = state => ({
  lists: state.lists.lists,
  newList: state.newList.list
});

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(ListsActions.listsFetchRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
