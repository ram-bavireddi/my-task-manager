import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    submit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isValidated: false
    };
  }

  validate = () => {
    const formLength = this.formEl.length;
    if (this.formEl.checkValidity()) {
      this.toggleValidationMessages(formLength, false);
      return true;
    } else {
      this.toggleValidationMessages(formLength, true);
      return false;
    }
  };

  toggleValidationMessages = (formLength, showFeedback = true) => {
    for (let i = 0; i < formLength; i++) {
      const control = this.formEl[i];
      const feedback = control.parentNode.querySelector('.invalid-feedback');
      if (feedback && control.nodeName.toLowerCase() !== 'button') {
        feedback.textContent =
          showFeedback && !control.validity.valid
            ? control.validationMessage
            : '';
      }
    }
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.validate()) {
      this.props.submit();
    }
    this.setState({
      isValidated: true
    });
  };

  render() {
    let classNames = [];
    if (this.props.className) {
      classNames = [...this.props.className];
    }
    if (this.state.isValidated) {
      classNames.push('was-validated');
    }

    return (
      <form
        ref={form => (this.formEl = form)}
        onSubmit={this.submitHandler}
        className={classNames.join(' ')}
        noValidate
      >
        {this.props.children}
      </form>
    );
  }
}
