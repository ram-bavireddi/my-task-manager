import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import StoreConfigurer from './store/StoreConfigurer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import FontAwesomeLibrary from './FontAwesomeLibrary';

FontAwesomeLibrary.init();

const app = (
  <Provider store={StoreConfigurer.configure()}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
