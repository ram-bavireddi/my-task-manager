import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardEditModal from './CardEditModal/CardEditModal';
import AppModal from '../../../../../components/Modal/Modal';
import PencilIcon from '../../../../../components/Icons/Pencil/PencilIcon';

import './Card.css';
import CardActions from './CardActions';

class Card extends Component {
  static propTypes = {
    listKey: PropTypes.string,
    card: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      cardModalOpen: false,
      cardEditModalOpen: false
    };
    this.toggleCardModal = this.toggleCardModal.bind(this);
    this.toggleCardEditModal = this.toggleCardEditModal.bind(this);
    this.onCardEdit = this.onCardEdit.bind(this);
    this.onCardDelete = this.onCardDelete.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
  }

  toggleCardModal() {
    this.setState(state => ({
      cardModalOpen: !state.cardModalOpen
    }));
  }

  toggleCardEditModal(event) {
    event.stopPropagation();
    this.setState(state => ({
      cardEditModalOpen: !state.cardEditModalOpen
    }));
  }

  showModalOnCardClick() {
    return (
      <AppModal
        isOpen={this.state.cardModalOpen}
        toggle={this.toggleCardModal}
        body={this.props.card.title}
      />
    );
  }

  showCardEditModal() {
    return (
      <CardEditModal
        isOpen={this.state.cardEditModalOpen}
        toggle={this.toggleCardEditModal}
        onCardEdit={this.onCardEdit}
        onCardDelete={this.onCardDelete}
        card={this.props.card}
      />
    );
  }

  onCardEdit(event, cardTitle) {
    this.props.card.title = cardTitle;
    this.props.onCardEdit(this.props.listKey, this.props.card);
    if (!this.props.cardEditLoading) {
      this.toggleCardEditModal(event);
    }
  }

  onCardDelete(event) {
    this.props.onCardDelete(this.props.listKey, this.props.card.key);
    if (!this.props.cardDeleteLoading) {
      this.toggleCardEditModal(event);
    }
  }

  onDragStart(event) {
    event.dataTransfer.setData(
      'card',
      JSON.stringify({
        fromList: this.props.listKey,
        card: this.props.card
      })
    );
  }

  render() {
    return (
      <Fragment>
        {this.showModalOnCardClick()}
        {this.showCardEditModal()}
        <div
          className="Card"
          onClick={this.toggleCardModal}
          draggable
          onDragStart={this.onDragStart}
        >
          <div className="card-title">{this.props.card.title}</div>
          <span className="card-edit" onClick={this.toggleCardEditModal}>
            <PencilIcon />
          </span>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cardEditLoading: state.editCard.cardEditLoading,
  cardDeleteLoading: state.editCard.cardDeleteLoading
});

const mapDispatchToProps = dispatch => ({
  onCardEdit: (listKey, card) =>
    dispatch(CardActions.cardEditRequest(listKey, card)),
  onCardDelete: (listKey, cardKey) =>
    dispatch(CardActions.cardDeleteRequest(listKey, cardKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
