import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginActions from './LoginActions';
import AppModal from '../components/Modal/Modal';
import Form from '../components/Form/Form';

import './Login.css';
import Button from '../components/Button/Button';

class Login extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object,
    loginFailureModalOpen: PropTypes.bool,
    onLogin: PropTypes.func,
    toggleLoginFailureModal: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    target.setCustomValidity('');
    const name = target.name;
    const value = target.value;
    this.setState(() => ({ [name]: value }));
  }

  handleInvalid(event, message) {
    const target = event.target;
    target.setCustomValidity(message);
  }

  onSubmit() {
    this.props.onLogin(this.state.email, this.state.password);
  }

  loginForm() {
    return (
      <Form submit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={this.state.email}
            required
            onChange={this.handleInputChange}
            onInvalid={event =>
              this.handleInvalid(
                event,
                'Please enter your email address in format: yourname@example.com'
              )
            }
          />
          <div className="invalid-feedback" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={this.state.password}
            required
            onChange={this.handleInputChange}
            onInvalid={event =>
              this.handleInvalid(event, 'Please enter your password')
            }
          />
          <div className="invalid-feedback" />
        </div>
        <Button
          type="submit"
          text="Login"
          textOnLoad="Login..."
          loading={this.props.loading}
        />
      </Form>
    );
  }

  render() {
    if (this.props.user) {
      return <Redirect push to="/board" />;
    }
    return (
      <div className="container Login">
        <AppModal
          isOpen={this.props.loginFailureModalOpen}
          toggle={this.props.toggleLoginFailureModal}
          body={
            'The email address or password you entered is not valid. Please try again.'
          }
        />
        {this.loginForm()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  user: state.login.user,
  loginFailureModalOpen: state.login.loginFailureModalOpen
});

const mapDispatchToProps = dispatch => ({
  onLogin: (email, password) =>
    dispatch(LoginActions.loginRequest(email, password)),
  toggleLoginFailureModal: () =>
    dispatch(LoginActions.toggleLoginFailureModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
