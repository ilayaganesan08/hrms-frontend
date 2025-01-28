import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import path
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import './assets/css/custom.css'
const container = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(container); // Create a root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
