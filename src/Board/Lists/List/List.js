import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './List.css';
import AddCard from './AddCard/AddCard';
import ListActions from './ListActions';
import Card from './Cards/Card/Card';

class List extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    cards: PropTypes.array
  };

  render() {
    return (
      <div className="List">
        <div className="font-weight-bold">{this.props.list.name}</div>
        <hr />
        {this.mapToCard()}
        {this.renderAddCard()}
      </div>
    );
  }

  renderAddCard() {
    let addCardLabel;
    if (this.props.cards && this.props.cards.length > 0) {
      addCardLabel = 'Add another card';
    }
    return (
      <AddCard addCardLabel={addCardLabel} listKey={this.props.list.key} />
    );
  }

  mapToCard() {
    if (this.props.cards) {
      return this.props.cards.map(card => (
        <Card key={card.key} listKey={this.props.list.key} card={card} />
      ));
    }
  }

  componentDidMount() {
    this.props.listDidMount(this.props.list);
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.cardsMap[ownProps.list.key]
});

const mapDispatchToProps = dispatch => ({
  listDidMount: list => dispatch(ListActions.listDidMount(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
