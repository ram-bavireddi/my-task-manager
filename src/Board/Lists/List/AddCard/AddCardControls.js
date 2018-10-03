import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import TimesIcon from '../../../../components/Icons/Times/Times';

class AddCardControls extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    cardTitle: PropTypes.string.isRequired,
    toggleOpenAddCard: PropTypes.func.isRequired,
    handleCardTitleChange: PropTypes.func.isRequired,
    onAddCard: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="AddCard AddCardControls">
        <form>
          <textarea
            name="cardTitle"
            className="card-title-input"
            dir="auto"
            placeholder="Enter a title for this card…"
            value={this.props.cardTitle}
            onChange={this.props.handleCardTitleChange}
            autoFocus
          />
          <Button
            loading={this.props.loading}
            text="Add Card"
            textOnLoad="Adding..."
            classNames="add-card-button"
            type="button"
            onClick={this.props.onAddCard}
          />
          <TimesIcon onClick={this.props.toggleOpenAddCard} />
        </form>
      </div>
    );
  }
}

export default AddCardControls;
