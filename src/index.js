import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import Router from './Router';

import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);