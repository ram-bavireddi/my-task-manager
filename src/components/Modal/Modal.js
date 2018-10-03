import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './Modal.css';

class AppModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    className: PropTypes.string,
    body: PropTypes.string
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalBody>{this.props.body}</ModalBody>
        <ModalFooter>
          <Button onClick={this.props.toggle} text="Ok" type="button" />
        </ModalFooter>
      </Modal>
    );
  }
}

export default AppModal;
