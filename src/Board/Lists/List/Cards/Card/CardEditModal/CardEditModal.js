import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import Button from '../../../../../../components/Button/Button';

import './CardEditModal.css';

class CardEditModal extends Component {
  static propTypes = {
    toggle: PropTypes.func,
    onCardEdit: PropTypes.func,
    onCardDelete: PropTypes.func,
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    card: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      cardTitle: this.props.card.title
    };
    this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
  }

  handleCardTitleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className="CardEditModal"
      >
        <ModalHeader toggle={this.props.toggle}>Edit card</ModalHeader>
        <ModalBody>
          <textarea
            name="cardTitle"
            value={this.state.cardTitle}
            rows="5"
            autoFocus
            onChange={this.handleCardTitleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={event =>
              this.props.onCardEdit(event, this.state.cardTitle)
            }
            loading={this.props.cardEditLoading}
            textOnLoad="Editing..."
            text="Edit"
            type="button"
          />
          <Button
            onClick={this.props.onCardDelete}
            loading={this.props.cardDeleteLoading}
            textOnLoad="Deleting..."
            text="Delete"
            type="button"
            classNames="btn-secondary"
          />
        </ModalFooter>
      </Modal>
    );
  }
}

export default CardEditModal;
