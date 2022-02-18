import React from 'react';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducer from '../reducers/index';
import initialState from '../initialState';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => {
  return (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};

export default ProviderMock;
