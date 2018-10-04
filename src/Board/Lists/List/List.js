import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './List.css';
import AddCard from './AddCard/AddCard';
import ListActions from './ListActions';
import Card from './Cards/Card/Card';
import CardActions from './Cards/Card/CardActions';

class List extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    cards: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    const cardData = JSON.parse(event.dataTransfer.getData('card'));
    cardData['toList'] = this.props.list.key;
    if (cardData.toList !== cardData.fromList) {
      this.props.cardDnDRequest(cardData);
    }
  }

  render() {
    return (
      <div className="List" onDragOver={this.onDragOver} onDrop={this.onDrop}>
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
  listDidMount: list => dispatch(ListActions.listDidMount(list)),
  cardDnDRequest: cardDnD => dispatch(CardActions.cardDnDRequest(cardDnD))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
