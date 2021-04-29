import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';




// provider is used to share the store in alll th etree level components in the applcation ..share the store in provider
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

