import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  static propTypes = {
    cards: PropTypes.array
  };

  render() {
    return this.mapToList();
  }

  mapToList() {
    return this.props.cards.map(card => <div key={card.key}>{card.title}</div>);
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards
});

export default connect(mapStateToProps)(Cards);
