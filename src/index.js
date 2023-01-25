import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Provider component from react-redux
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  implement the Provider component and pass store as one of it's props
  <Provider store={store}>
    <App />
  </Provider>
);
