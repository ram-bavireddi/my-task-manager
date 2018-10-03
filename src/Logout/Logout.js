import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LogoutActions from './LogoutActions';
import AppModal from '../components/Modal/Modal';

class Logout extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    logoutFailureModalOpen: PropTypes.bool,
    onLogout: PropTypes.func.isRequired
  };

  toggleLogoutFailureModal = () => {
    this.props.toggleLogoutFailureModal();
    this.props.history.push('/');
  };

  render() {
    return (
      <Fragment>
        <AppModal
          isOpen={this.props.logoutFailureModalOpen}
          toggle={this.toggleLogoutFailureModal}
          body={'Logout failed. Please try again.'}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.onLogout();
    this.props.history.push('/');
  }
}

const mapStateToProps = state => ({
  loading: state.logout.loading,
  error: state.logout.error,
  logoutFailureModalOpen: state.logout.logoutFailureModalOpen
});

const mapDispatchToProps = disptach => ({
  onLogout: () => disptach(LogoutActions.logoutRequest()),
  toggleLogoutFailureModal: () =>
    disptach(LogoutActions.toggleLogoutFailureModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
