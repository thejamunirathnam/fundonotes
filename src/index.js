import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux'   //connects global store to app .js 


//store
const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// provider is used to share the store in alll the tree level components in the applcation ..share the store in provider
ReactDOM.render(
    <Provider store={myStore}>
      <App />
    </Provider>,
    document.getElementById('root')
);

