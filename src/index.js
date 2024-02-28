import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n'

import Router from './Router';

import { Provider } from 'react-redux'
import { setupStore } from './store/store'

import './index.scss';

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);