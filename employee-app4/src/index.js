import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import employeesReducer from './state/employeesReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

let employeeStore = createStore(employeesReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={employeeStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();