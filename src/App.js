import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Board from './Board/Board';

import './App.css';

class App extends Component {
  static propTypes = {
    loginSuccess: PropTypes.bool,
    user: PropTypes.object
  };

  prepareRoutes() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.user) {
      routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/board" component={Board} />
          <Route exact path="/" component={Board} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return routes;
  }

  render() {
    const routes = this.prepareRoutes();
    return (
      <div className="App">
        <Navbar />
        <main className="main">{routes}</main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user
});

export default withRouter(connect(mapStateToProps)(App));
