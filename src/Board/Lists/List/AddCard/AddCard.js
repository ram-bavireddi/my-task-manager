import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OpenAddCard from './OpenAddCard';
import AddCardControls from './AddCardControls';
import AddCardActions from './AddCardActions';

import './AddCard.css';

class AddCard extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    onAddCard: PropTypes.func.isRequired,
    listKey: PropTypes.string.isRequired,
    addCardLabel: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      cardTitle: ''
    };
    this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
    this.onAddCard = this.onAddCard.bind(this);
    this.toggleOpenAddCard = this.toggleOpenAddCard.bind(this);
  }

  handleCardTitleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(() => ({ [name]: value }));
  }

  onAddCard() {
    if (this.state.cardTitle) {
      this.props.onAddCard(this.state.cardTitle, this.props.listKey);
    }
  }

  toggleOpenAddCard() {
    this.props.toggleOpenAddCard(`${this.props.listKey}-openAddCard`);
  }

  render() {
    let element;
    if (this.props[`${this.props.listKey}-openAddCard`]) {
      element = (
        <AddCardControls
          loading={this.props.loading}
          cardTitle={this.state.cardTitle}
          toggleOpenAddCard={this.toggleOpenAddCard}
          handleCardTitleChange={this.handleCardTitleChange}
          onAddCard={this.onAddCard}
        />
      );
    } else {
      element = (
        <OpenAddCard
          label={this.props.addCardLabel}
          toggleOpenAddCard={this.toggleOpenAddCard}
        />
      );
    }
    return <Fragment>{element}</Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.newCard.loading,
    [`${ownProps.listKey}-openAddCard`]: state.newCard[
      `${ownProps.listKey}-openAddCard`
    ]
  };
};

const mapDispatchToProps = dispatch => ({
  onAddCard: (cardTitle, listKey) =>
    dispatch(AddCardActions.addCardRequest(cardTitle, listKey)),
  toggleOpenAddCard: openAddCardKey =>
    dispatch(AddCardActions.toggleOpenAddCard(openAddCardKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);
