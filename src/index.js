import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate  loading={<h1>Loading ...</h1>} persistor={persistor}>
        <BrowserRouter>
          <App />
          <GlobalStyle/>
        </BrowserRouter>
        </PersistGate>
  </Provider>,
  document.getElementById('root')
);


