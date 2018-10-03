import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from './List/List';

class Lists extends Component {
  static propTypes = {
    lists: PropTypes.array
  };

  render() {
    return this.mapToList();
  }

  mapToList() {
    return this.props.lists.map(list => <List key={list.key} list={list} />);
  }
}

const mapStateToProps = state => ({
  lists: state.lists.lists
});

export default connect(mapStateToProps)(Lists);
