import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { Provider } from 'react-redux'
import reduceApp from './reducers'

import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    reduceApp,
    applyMiddleware(thunkMiddleware)
)

store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
