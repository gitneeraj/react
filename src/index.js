import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { rootReducers } from './reducers/index';
import { Routes } from './_routes';

import './index.css'
import './css/main.min.css'
import './css/_all-skins.min.css'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducers,
    applyMiddleware(thunk, loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('root')
);