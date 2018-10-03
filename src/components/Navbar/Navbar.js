import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';

class Navbar extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  prepareNav() {
    let nav = (
      <Fragment>
        <NavLink className="NavLink nav-item nav-link" to="/login">
          Login
        </NavLink>
      </Fragment>
    );
    if (this.props.user) {
      nav = (
        <Fragment>
          <NavLink className="NavLink nav-item nav-link" to="/logout">
            Logout
          </NavLink>
        </Fragment>
      );
    }
    return nav;
  }

  render() {
    const nav = this.prepareNav();
    return (
      <nav className="Navbar navbar navbar-expand-lg">
        <NavLink className="Navbar-brand navbar-brand" to="/">
          My Task Manager
        </NavLink>
        <div className="collapse navbar-collapse Navbar-nav">
          <div className="navbar-nav">{nav}</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user
});

export default connect(mapStateToProps)(Navbar);
